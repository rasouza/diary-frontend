import { useMutation } from 'react-query'
import { createStory } from '../api'

export const mutateStory = useMutation((story) => createStory(story))
