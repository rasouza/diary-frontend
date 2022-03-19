import { useQuery } from 'react-query'
import { getStories } from '../api'

export const useStories = () => useQuery('stories', getStories)
