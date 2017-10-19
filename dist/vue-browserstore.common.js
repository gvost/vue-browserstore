/*!
 * vue-browserstore v0.1.2 
 * (c) 2017 David Johnson
 * Released under the MIT License.
 */
'use strict';

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;
  _Vue = Vue;
  Vue.prototype.$browserStore = this;
}

// 

var VueBrowserstore = function VueBrowserstore (localStore, sessionStore) {
  this.localStore = localStore;
  this.sessionStore = sessionStore;
};

  

VueBrowserstore.local = function local () {
  var currentState = {};
  for (var key in window.localStorage) {
    currentState[key] = window.localStorage[key];
  }
  this.browserState.localStore = currentState;
  return this.browserState.localStore
};
VueBrowserstore.session = function session () {
  var currentState = {};
  for (var key in window.sessionStorage) {
    currentState[key] = window.sessionStorage[key];
  }
  this.browserState.sessionStore = currentState;
  return this.browserState.sessionStore
};

VueBrowserstore.setLocal = function setLocal (key, val) {
  window.localStorage.setItem(key, val);
  return true
};
VueBrowserstore.setSession = function setSession (key, val) {
  window.sessionStorage.setItem(key, val);
  return true
};

VueBrowserstore.getLocal = function getLocal (key) {
  return window.localStorage.getItem(key)
};
VueBrowserstore.getSession = function getSession (key) {
  return window.sessionStorage.getItem(key)
};

VueBrowserstore.removeLocal = function removeLocal (key) {
  window.localStorage.removeItem(key);
  return true
};
VueBrowserstore.removeSession = function removeSession (key) {
  window.sessionStorage.removeItem(key);
  return true
};

VueBrowserstore.clearLocal = function clearLocal () {
  window.localStorage.clear();
  return true
};
VueBrowserstore.clearSession = function clearSession () {
  window.sessionStorage.clear();
  return true
};

VueBrowserstore.getBrowserState = function getBrowserState () {
  return this.browserState
};

VueBrowserstore.install = install;
VueBrowserstore.version = '0.1.0';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueBrowserstore);
}

module.exports = VueBrowserstore;
