import { useQuery, useMutation, useQueryClient } from 'react-query'
import { sendSuccess, sendError } from 'lib/notify'
import { getStories, createStory } from '../api'
import { splitEvery } from 'ramda'

export const useStoriesByChunk = (chunks) =>
  useQuery(['stories', { chunks }], async () => {
    const data = await getStories()
    return splitEvery(chunks, data)
  })

export const useStories = () => useQuery('stories', getStories)

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
