// export const myAction = async ({ commit }) => {}
import countriesApi from '../../api/countriesApi'

export const getCountries = async ({ commit }) => {
  const { data } = await countriesApi.get('/all')

  const countries = data.map((country) => {
    const {
      translations: {
        spa: { common }
      },
      capital,
      flags: { png },
      population
    } = country

    const newPopulation = population.toLocaleString()
    const firstCapital = capital && capital.length > 0 ? capital[0] : ''

    return { name: common, capital: firstCapital, picture: png, population: newPopulation }
  })

  commit('setCountries', countries)
}

export const getCountry = async ({ commit }, name) => {
  const { data } = await countriesApi.get(`/name/${name}`)

  const {
    translations: {
      spa: { common }
    },
    capital,
    flags: { png },
    population,
    cca2,
    ccn3,
    translations
  } = data

  const newPopulation = population.toLocaleString()
  const firstCapital = capital && capital.length > 0 ? capital[0] : ''

  const country = {
    name: common,
    capital: firstCapital,
    picture: png,
    population: newPopulation,
    cca2,
    ccn3,
    translations
  }
}
