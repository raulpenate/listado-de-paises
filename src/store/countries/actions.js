// export const myAction = async ({ commit }) => {}
import countriesApi from '../../api/countriesApi'

export const getCountries = async ({ commit }) => {
  const { data } = await countriesApi.get('/all')

  const countries = data.map((country) => {
    const {
      name,
      translations: {
        spa: { common }
      },
      capital,
      flags: { png },
      population
    } = country

    const newPopulation = population.toLocaleString()
    const firstCapital = capital && capital.length > 0 ? capital[0] : ''

    return {
      name: common,
      capital: firstCapital,
      picture: png,
      population: newPopulation,
      searchName: name.common
    }
  })

  commit('setCountries', countries)
}

export const obtainCountry = async ({ commit }, name) => {
  const { data } = await countriesApi.get(`/name/${name}`)

  const {
    translations: {
      spa: { common }
    },
    capital,
    flags: { png },
    population,
    cca2,
    ccn3
  } = data

  const newPopulation = population.toLocaleString()
  const firstCapital = capital && capital.length > 0 ? capital[0] : ''

  const country = {
    name: common,
    capital: firstCapital,
    picture: png,
    population: newPopulation,
    cca2,
    ccn3
  }
  console.log(country)

  commit('setCountry', country)
}
