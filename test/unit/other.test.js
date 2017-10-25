import Vue from 'vue'
import VueBrowserstore from '../../src'

describe('check for window.Vue fallback', () => {
  beforeEach(() => {
    window.Vue = new Vue()
    window.localStorage.setItem('foo', 'baz')
    window.sessionStorage.setItem('foo', 'baz')
  })
  describe('Vue attached to window not global vm', () => {
    it('should apply to alternate vue implementation', done => {
      nextTick(() => {
        function defined (x) {
          return x !== undefined
        }
        assert(defined(window.Vue.$browserStore), 'Not working')
      }).then(done)
    })
  })
})
describe('check initialization of .localStore & .sessionStore', () => {
  let vm
  beforeEach(() => {
    vm = new Vue()
  })
  describe('sessionStore', () => {
    it('should exist with a value of undefined', done => {
      nextTick(() => {
        function defined (x) {
          return x !== undefined
        }
        let vbs = new VueBrowserstore()
        assert(!defined(vbs.sessionStore), 'Not working')
      }).then(done)
    })
  })
  describe('localStore', () => {
    it('should exist with a value of undefined', done => {
      nextTick(() => {
        function defined (x) {
          return x !== undefined
        }
        let vbs = new VueBrowserstore()
        assert(!defined(vbs.localStore), 'Not working')
      }).then(done)
    })
  })
})
