/*!
 * vue-browserstore v0.1.0 
 * (c) 2017 David Johnson
 * Released under the MIT License.
 */
var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  // const defined = v => v !== undefined
  // Vue.prototype.$browserStore = VueBrowserStore
  // Vue.mixin({
  //   beforeCreate () {
  //     if (defined(this._browserStore)) {
  //       this._browserStore = this
  //     } else {
  //       this._browserStore.init(this)
  //     }
  //   }
  // })
  Vue.prototype.$browserStore = VueBrowserStore;
  // Object.defineProperty(Vue.prototype, '$browserStore', {
  //   get () { return this._browserStore }
  // })
}

// 

// function install (Vue) {
//   Vue.prototype.$browserStore = VueBrowserStore
// }

var VueBrowserStore$1 = function VueBrowserStore$1 () {};

VueBrowserStore$1.prototype.session = function session () {
  var currentState = new Object({});
  for (var key in window.sessionStorage) {
    currentState[key] = window.sessionStorage[key];
  }
  return currentState
};

VueBrowserStore$1.version = '0.1.0';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueBrowserStore$1);
}

export default VueBrowserStore$1;
