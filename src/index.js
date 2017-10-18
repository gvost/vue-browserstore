/* eslint-disable */

function install (Vue) {
  Vue.prototype.$browserStore = VueBrowserStore
}

export default class VueBrowserStore {
  constructor (localStore, sessionStore) {
    this.localStore = localStore
    this.sessionStore = sessionStore
  }
  static install = install
  static local () {
    let currentState = {}
    for (let key in window.localStorage) {
      currentState[key] = window.localStorage[key]
    }
    return currentState
  }
  static session () {
    let currentState = {}
    for (let key in window.sessionStorage) {
      currentState[key] = window.sessionStorage[key]
    }
    return currentState
  }
  static getLocal (key) {
    return window.localStorage.getItem(key)
  }
  static removeLocal (key) {
    window.localStorage.removeItem(key)
    return true
  }
  static clearLocal () {
    window.localStorage.clear()
    return true
  }
  static setLocal (key, val) {
    window.localStorage.setItem(key, val)
    return true
  }
  static getSession (key) {
    return window.sessionStorage.getItem(key)
  }
  static setSession (key, val) {
    window.sessionStorage.setItem(key, val)
    return true
  }
  static removeSession (key) {
    window.sessionStorage.removeItem(key)
    return true
  }
  static clearSession () {
    window.sessionStorage.clear()
    return true
  }
}

VueBrowserStore.version = '0.1.0'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueBrowserStore)
}
