import Vue from 'vue'

describe('browser store state', () => {
  let vm

  beforeEach(() => {
    vm = new Vue()
    window.sessionStorage.clear()
  })

  describe('get browser storage state', () => {
    it('should match object type of control', done => {
      nextTick(() => {
        const control = { localStore: {}, sessionStore: {} }
        const result = vm.$browserStore.getBrowserState()
        console.log(control, result)
        assert(typeof(control) === typeof(result), 'NOOOOOO!!!')
      }).then(done)
    })
  })
})
