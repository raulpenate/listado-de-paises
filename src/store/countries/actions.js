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
  try {
    const { data } = await countriesApi.get(`/name/${name}`)

    const {
      translations: { ara, kor, por, ita, spa, jpn },
      capital,
      flags: { png },
      population,
      cca2,
      ccn3
    } = data[0]

    const spanishName = spa?.common || ''
    const firstCapital = capital && capital.length > 0 ? capital[0] : ''
    const newPopulation = population?.toLocaleString() || ''

    const country = {
      name: spanishName,
      capital: firstCapital,
      picture: png,
      population: newPopulation,
      cca2,
      ccn3,
      ara,
      kor,
      por,
      ita,
      jpn
    }

    commit('setCountry', country)
  } catch (error) {
    console.error(error)
  }
}
