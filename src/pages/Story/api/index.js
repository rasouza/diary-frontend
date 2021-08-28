import axios from 'lib/axios'

// @TODO: Implement repo/project selection
const MAIN_REPO = 'main'

export function getStories() {
  return axios.get('/stories')
}

export function createStory(story) {
  const data = { ...story, repo: MAIN_REPO }
  return axios.post('/stories', data)
}
