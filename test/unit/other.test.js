import Vue from 'vue'

describe('check for window.Vue fallback', () => {
  beforeEach(() => {
    window.Vue = new Vue()
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
    it('should be defined', done => {
      nextTick(() => {
        function defined (x) {
          return x !== undefined
        }
        assert(defined(vm.$browserStore.browserState.sessionStore), 'Not working')
      }).then(done)
    })
  })
  describe('localStore', () => {
    it('should be defined', done => {
      nextTick(() => {
        function defined (x) {
          return x !== undefined
        }
        assert(defined(vm.$browserStore.browserState.localStore), 'Not working')
      }).then(done)
    })
  })
})
