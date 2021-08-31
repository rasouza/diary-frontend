import { useQuery } from 'react-query'
import { getStories } from '../api'
import { splitEvery } from 'ramda'

export const useStoriesByChunk = (chunk) =>
  useQuery('stories', async () => {
    const data = await getStories()
    return splitEvery(chunk, data)
  })

export const useStories = () => useQuery('stories', getStories)
