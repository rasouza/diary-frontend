import { createStory } from '../api'
import { useMutation, useQueryClient } from 'react-query'

import { useNotify } from 'lib/NotifyProvider'

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
