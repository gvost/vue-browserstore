// @flow

import { install } from './install'

export default class VueBrowserstore<A, B> {

  static install: () => void;
  static version: string;
  localStore: A
  sessionStore: B

  constructor (localStore: A, sessionStore: B) {
    this.localStore = localStore
    this.sessionStore = sessionStore
  }

  static browserState: Object

  static local (): Object {
    const currentState = {}
    for (var key in window.localStorage) {
      currentState[key] = window.localStorage[key]
    }
    this.browserState === undefined ? this.browserState = {} : this.browserState = this.browserState
    this.browserState.localStore = currentState
    return this.browserState.localStore
  }
  static session (): Object {
    const currentState = {}
    for (var key in window.sessionStorage) {
      currentState[key] = window.sessionStorage[key]
    }
    this.browserState === undefined ? this.browserState = {} : this.browserState = this.browserState
    this.browserState.sessionStore = currentState
    return this.browserState.sessionStore
  }

  static setLocal (key: string, val: any): boolean {
    window.localStorage.setItem(key, val)
    return true
  }
  static setSession (key: string, val: any): boolean {
    window.sessionStorage.setItem(key, val)
    return true
  }

  static getLocal (key: string): String {
    return window.localStorage.getItem(key)
  }

  static getSession (key: string): String {
    return window.sessionStorage.getItem(key)
  }

  static removeLocal (key: string): boolean {
    window.localStorage.removeItem(key)
    return true
  }
  static removeSession (key: string): boolean {
    window.sessionStorage.removeItem(key)
    return true
  }
  static clearLocal (): boolean {
    window.localStorage.clear()
    return true
  }
  static clearSession (): boolean {
    window.sessionStorage.clear()
    return true
  }

  static getBrowserState (): Object {
    this.browserState === undefined ? this.browserState = {} : this.browserState = this.browserState
    return this.browserState
  }
}

VueBrowserstore.install = install
VueBrowserstore.version = '0.1.3'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueBrowserstore)
}
