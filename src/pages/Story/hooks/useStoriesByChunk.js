import { useQuery } from 'react-query'
import { splitEvery } from 'ramda'
import { getStories } from '../api'

export const useStoriesByChunk = (chunks) =>
  useQuery('stories', getStories, { select: splitEvery(chunks) })
