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

  const openModal = (country) => {
    store.commit('countries/openModal', country)
  }

  const closeModal = (country) => {
    store.commit('countries/closeModal', country)
  }

  const cleanCountry = () => {
    store.commit('countries/setCountry', '')
  }

  const getModal = (country) => {
    store.commit('countries/getModal', country)
  }

  return {
    getCountries,
    getCountry,
    cleanCountry,
    openModal,
    closeModal,
    getModal,

    countries: computed(() => store.getters['countries/getCountries']),
    country: computed(() => store.getters['countries/getCountry'])
  }
}

export default useCountries
