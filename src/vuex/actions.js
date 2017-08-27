import * as types from './mutation-types'

const makeAction = (type) => {
  return ({ commit }, ...args) => commit(type, ...args)
}

// ------------------- 设置登录信息 -------------------------
export const setUrl = makeAction(types.SET_URL)
