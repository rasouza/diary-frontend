import axios from 'lib/axios'
import { reject, equals } from 'ramda'

// @TODO: Implement repo/project selection
const MAIN_REPO = 'main'

export function getStories() {
  return axios.get('/stories').then((resp) => resp.data)
}

export function createStory(story) {
  const data = reject(equals(''))({ ...story, repo: MAIN_REPO })
  return axios.post('/stories', data).then((resp) => resp.data)
}

export function deleteStory(id) {
  return axios.delete(`/stories/${id}`).then((resp) => resp.data)
}
