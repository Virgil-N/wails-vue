/**
 * Created Date: 2021-11-15 04:01:12
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-16 09:50:16
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2021 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import app from './modules/app'


export default createStore({
  plugins: [
    createPersistedState()
  ],
  modules: {
    app
  }
})