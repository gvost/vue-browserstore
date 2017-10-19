// @flow

import { install } from './install'

export default class VueBrowserstore {

  static install: () => void;
  static version: string;

  constructor (localStore, sessionStore) {
    this.localStore = localStore
    this.sessionStore = sessionStore
  }

  static browserState = {}

  static local (): Function {
    let currentState = new Object({})
    for (let key in window.localStorage) {
      currentState[key] = window.localStorage[key]
    }
    this.browserState.localStore = currentState
    return this.browserState.localStore
  }
  static session (): Function {
    let currentState = new Object({})
    for (let key in window.sessionStorage) {
      currentState[key] = window.sessionStorage[key]
    }
    this.browserState.sessionStore = currentState
    return this.browserState.sessionStore
  }

  static setLocal (key: string, val: any): Function {
    window.localStorage.setItem(key, val)
    return true
  }
  static setSession (key: string, val: any): Function {
    window.sessionStorage.setItem(key, val)
    return true
  }

  static getLocal (key: string): Function {
    return window.localStorage.getItem(key)
  }
  static getSession (key: string): Function {
    return window.sessionStorage.getItem(key)
  }

  static removeLocal (key: string): Function {
    window.localStorage.removeItem(key)
    return true
  }
  static removeSession (key: string): Function {
    window.sessionStorage.removeItem(key)
    return true
  }

  static clearLocal () {
    window.localStorage.clear()
    return true
  }
  static clearSession () {
    window.sessionStorage.clear()
    return true
  }

  static getBrowserState (): Function {
    return this.browserState
  }
}

VueBrowserstore.install = install
VueBrowserstore.version = '0.1.0'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueBrowserstore)
}
