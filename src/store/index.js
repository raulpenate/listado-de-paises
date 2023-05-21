import { createStore } from 'vuex'
import countries from './countries/index'

const store = createStore({
  modules: {
    countries
  }
})

export default store
