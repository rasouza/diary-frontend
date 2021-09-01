import { useQuery, useMutation, useQueryClient } from 'react-query'
import { sendSuccess, sendError } from 'lib/notify'
import { getStories, createStory, deleteStory } from '../api'
import { propEq, reject, splitEvery } from 'ramda'

export const useStories = () => useQuery('stories', getStories)
export const useStoriesByChunk = (chunks) =>
  useQuery('stories', getStories, { select: splitEvery(chunks) })

export const useMutateStory = (notify) => {
  const queryClient = useQueryClient()

  return useMutation(createStory, {
    onSuccess: () => {
      queryClient.invalidateQueries('stories')
      sendSuccess('Story saved successfully', notify)
    },
    onError: (error) => {
      sendError(error.response.data.message, notify)
    }
  })
}

export const useDeleteStory = () => {
  const queryClient = useQueryClient()
  const rejectById = (id) => reject(propEq('id', id))

  return useMutation((id) => deleteStory(id), {
    onMutate: async (id) => {
      await queryClient.cancelQueries('stories')

      const previousStories = queryClient.getQueryData('stories')
      queryClient.setQueryData('stories', rejectById(id))

      return { previousStories }
    },
    onError: (_error, id, context) => {
      // @TODO: sendError('Not possible to delete story, please try again later', notify)

      queryClient.setQueryData('stories', context.previousStories)
    }
  })
}
