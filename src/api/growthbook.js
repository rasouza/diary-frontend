import axios from 'axios'

export const loadFeatures = async (growthbook) => {
  const res = await axios.get(window.FEATURES_ENDPOINT)
  const { features } = res.data
  growthbook.setFeatures(features)

  window.localStorage.setItem(
    'supabase',
    JSON.stringify(growthbook.getFeatureValue('supabase'))
  )
  window.localStorage.setItem(
    'CORE_URL',
    growthbook.getFeatureValue('core-url')
  )
}
