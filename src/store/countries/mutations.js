// export const myMutation = (state) => {

// }

export const setCountries = (state, countries) => {
  state.countries = countries
}

export const setCountry = (state, country) => {
  state.country = country
}

export const openModal = (state, country) => {
  state.modals[country] = true
}

export const closeModal = (state, country) => {
  state.modals[country] = false
}

export const getModal = (state, country) => {
  return state.modals[country]
}
