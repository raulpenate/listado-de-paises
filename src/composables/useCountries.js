import { computed } from 'vue'
import { useStore } from 'vuex'

const useCountries = () => {
  const store = useStore()

  const getCountries = async () => {
    await store.dispatch('countries/getCountries')
  }

  const getCountry = async (country) => {
    await store.dispatch('countries/obtainCountry', country)
  }

  return {
    getCountries,
    getCountry,

    countries: computed(() => store.getters['countries/getCountries']),
    country: computed(() => store.getters['countries/getCountry'])
  }
}

export default useCountries
