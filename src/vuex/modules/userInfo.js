import {SET_URL} from '../mutation-types'

const state = {
  url: false
}

const mutations = {
  //获取商品分类信息
  [SET_URL](state, url) {
    state.url = url;
  }
}

export default {
  state,
  mutations
}
