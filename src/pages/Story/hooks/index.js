import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getStories, createStory, deleteStory } from '../api'
import { propEq, reject, splitEvery } from 'ramda'
import { useNotify } from 'lib/NotifyProvider'

export const useStories = () => useQuery('stories', getStories)
export const useStoriesByChunk = (chunks) =>
  useQuery('stories', getStories, { select: splitEvery(chunks) })

export const useCreateStory = () => {
  const queryClient = useQueryClient()
  const { notifyError, notifySuccess } = useNotify()

  return useMutation(createStory, {
    onSuccess: () => {
      queryClient.invalidateQueries('stories')
      notifySuccess('Story saved successfully')
    },
    onError: (error) => {
      notifyError(error.response.data.message)
    }
  })
}

export const useDeleteStory = () => {
  const queryClient = useQueryClient()
  const { notifyError } = useNotify()
  const rejectById = (id) => reject(propEq('id', id))

  return useMutation((id) => deleteStory(id), {
    onMutate: async (id) => {
      await queryClient.cancelQueries('stories')

      const previousStories = queryClient.getQueryData('stories')
      queryClient.setQueryData('stories', rejectById(id))

      return { previousStories }
    },
    onError: (_error, id, context) => {
      try {
        notifyError('Not possible to delete story, please try again later')
      } catch (error) {
        console.log(error)
      }

      queryClient.setQueryData('stories', context.previousStories)
    }
  })
}
