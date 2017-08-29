import {SET_URL, MARK_SHARE} from '../mutation-types'

const state = {
  url: false,
  isShare: false
}

const mutations = {
  //获取商品分类信息
  [SET_URL](state, url) {
    state.url = url;
  },

  //标记是否分享
  [MARK_SHARE](state, isShare) {
    state.isShare = isShare;
  }
}

export default {
  state,
  mutations
}
