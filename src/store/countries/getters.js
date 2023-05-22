// export const myGetter = (state) => {
//   return state
// }

export const getCountries = (state) => {
  return state.countries
}

export const getCountry = (state) => {
  return state.country
}

export const getModal = (state) => (searchName) => {
  return state.modals[searchName] || false
}
