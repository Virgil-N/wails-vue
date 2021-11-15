/**
 * Created Date: 2021-11-15 04:02:36
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-15 04:51:03
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2021 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import {
  getTokenByName,
  setTokenByName,
  removeTokenByName
} from '@/utils/cookie.js'

const state = {
  navOpend: true
}

const mutations = {
  SET_NAV_OPEND: (state, val) => {
    state.navOpend = val
    setTokenByName("navOpend", val)
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
