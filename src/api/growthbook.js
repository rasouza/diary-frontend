import axios from 'axios'

export const loadFeatures = async (growthbook) => {
  const res = await axios.get(window.FEATURES_ENDPOINT)
  const { features } = res.data
  growthbook.setFeatures(features)
}
