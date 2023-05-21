import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const countriesModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default countriesModule
