import { useMutation, useQueryClient } from 'react-query'
import { propEq, reject } from 'ramda'
import { useNotify } from 'lib/NotifyProvider'
import { deleteStory } from '../api'

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
