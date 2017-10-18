/*!
 * vue-browserstore v0.1.0 
 * (c) 2017 David Johnson
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueBrowserstore = factory());
}(this, (function () { 'use strict';

/* eslint-disable */

var VueBrowserStore = function VueBrowserStore (localStore, sessionStore) {
  this.localStore = localStore;
  this.sessionStore = sessionStore;
};
VueBrowserStore.prototype.install = function install (Vue) {
  Vue.prototype.$browserStore = VueBrowserStore;
};
VueBrowserStore.local = function local () {
  var currentState = {};
  for (var key in window.localStorage) {
    currentState[key] = window.localStorage[key];
  }
  return currentState
};
VueBrowserStore.session = function session () {
  var currentState = {};
  for (var key in window.sessionStorage) {
    currentState[key] = window.sessionStorage[key];
  }
  return currentState
};
VueBrowserStore.getLocal = function getLocal (key) {
  return window.localStorage.getItem(key)
};
VueBrowserStore.removeLocal = function removeLocal (key) {
  window.localStorage.removeItem(key);
  return true
};
VueBrowserStore.clearLocal = function clearLocal () {
  window.localStorage.clear();
  return true
};
VueBrowserStore.setLocal = function setLocal (key, val) {
  window.localStorage.setItem(key, val);
  return true
};
VueBrowserStore.getSession = function getSession (key) {
  return window.sessionStorage.getItem(key)
};
VueBrowserStore.setSession = function setSession (key, val) {
  window.sessionStorage.setItem(key, val);
  return true
};
VueBrowserStore.removeSession = function removeSession (key) {
  window.sessionStorage.removeItem(key);
  return true
};
VueBrowserStore.clearSession = function clearSession () {
  window.sessionStorage.clear();
  return true
};

VueBrowserStore.version = '0.1.0';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueBrowserStore);
}

return VueBrowserStore;

})));
