import diaryCore from 'api/diaryCore'
import { reject, equals } from 'ramda'

// @TODO: Implement repo/project selection
const MAIN_REPO = 'main'

export function getStories() {
  return diaryCore.get('/stories').then((resp) => resp.data)
}

export function createStory(story) {
  const data = reject(equals(''))({ ...story, repo: MAIN_REPO })
  return diaryCore.post('/stories', data).then((resp) => resp.data)
}

export function deleteStory(id) {
  return diaryCore.delete(`/stories/${id}`).then((resp) => resp.data)
}
