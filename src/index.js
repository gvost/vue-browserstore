// @flow

// function install (Vue) {
//   Vue.prototype.$browserStore = VueBrowserStore
// }

import { install } from './install'

export default class VueBrowserStore {

  static install: () => void;
  static version: string;

  constructor (localStore, sessionStore) {
    this.localStore = localStore
    this.sessionStore = sessionStore
  }
  static browserState = {}
  static session (): Function {
    let currentState = new Object({})
    for (let key in window.sessionStorage) {
      currentState[key] = window.sessionStorage[key]
    }
    this.browserState.sessionStore = currentState
    return this.browserState.sessionStore
  }
  static local (): Function {
    let currentState = new Object({})
    for (let key in window.localStorage) {
      currentState[key] = window.localStorage[key]
    }
    this.browserState.localStore = currentState
    return this.browserState.localStore
  }
  // static getBrowserState (): Function {
  //   return this.browserState
  // }

  // static getLocal (key) {
  //   return window.localStorage.getItem(key)
  // }
  // static removeLocal (key) {
  //   window.localStorage.removeItem(key)
  //   return true
  // }
  // static clearLocal () {
  //   window.localStorage.clear()
  //   return true
  // }
  // static setLocal (key, val) {
  //   window.localStorage.setItem(key, val)
  //   return true
  // }
  // static getSession (key) {
  //   return window.sessionStorage.getItem(key)
  // }
  // static setSession (key, val) {
  //   window.sessionStorage.setItem(key, val)
  //   return true
  // }
  // static removeSession (key) {
  //   window.sessionStorage.removeItem(key)
  //   return true
  // }
  // static clearSession () {
  //   window.sessionStorage.clear()
  //   return true
  // }
}
// VueRouter.install = install
// VueRouter.version = '__VERSION__'
VueBrowserStore.install = install
VueBrowserStore.version = '0.1.0'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueBrowserStore)
}
