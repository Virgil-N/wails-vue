/**
 * Created Date: 2021-11-15 04:31:00
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-15 04:32:04
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2021 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import Cookies from 'js-cookie'

const millisecond = new Date().getTime()
const expiresTime = new Date(millisecond + 60 * 1000 * 30)
const attributes = { expires: expiresTime, path: `/` }

export function getTokenByName(name) {
  return Cookies.get(name)
}

export function setTokenByName(name, token) {
  if (name && token) {
    return Cookies.set(name, token, attributes)
  } else {
    return false
  }
}

export function removeTokenByName(name) {
  return Cookies.remove(name, { path: `/bbx` })
}
 