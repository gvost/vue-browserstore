/* eslint-disable space-unary-ops */
import Vue from 'vue'

describe('browser store state', () => {
  let vm

  beforeEach(() => {
    vm = new Vue()
    window.sessionStorage.clear()
    window.localStorage.clear()
  })

  describe('get browser storage state', () => {
    it('should match object type of control', done => {
      nextTick(() => {
        // const control = { localStore: {}, sessionStore: {} }
        // const result = vm.$browserStore.getBrowserState()
        // assert(typeof(control) === typeof(result), 'NOOOOOO!!!')
        function defined (x) {
          return x !== undefined
        }
        window.localStorage.setItem('test', 'boo')
        assert(defined(vm.$browserStore.getBrowserState()), 'You should be implemented!!')
      }).then(done)
    })
  })
})
