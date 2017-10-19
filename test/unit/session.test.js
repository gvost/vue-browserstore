import Vue from 'vue'

describe('session', () => {
  let vm

  beforeEach(() => {
    vm = new Vue()
    window.sessionStorage.clear()
  })

  describe('get session storage', () => {
    it('should not be undefined', done => {
      nextTick(() => {
        const test = vm.$browserStore.session()
        assert(test !== undefined, 'You should be implemented!!')
      }).then(done)
    })
  })
  describe('set session entry', () => {
    it('should return "boo"', done => {
      nextTick(() => {
        vm.$browserStore.setSession('test', 'boo')
        assert(window.sessionStorage.getItem('test') === 'boo', 'You broke it!!')
      }).then(done)
    })
  })
  describe('get session entry', () => {
    it('should return "boo"', done => {
      nextTick(() => {
        window.sessionStorage.setItem('test', 'boo')
        vm.$browserStore.getSession('test')
        assert(vm.$browserStore.getSession('test') === 'boo', 'You broke it!!')
      }).then(done)
    })
  }),
  describe('remove session entry', () => {
    it('should return true', done => {
      nextTick(() => {
        window.sessionStorage.setItem('test', 'boo')
        const result = vm.$browserStore.removeSession('test')
        assert(result === true, 'You broke it!!')
      }).then(done)
    })
  })
  describe('clear session storage', () => {
    it('should return true', done => {
      nextTick(() => {
        window.sessionStorage.setItem('test', 'boo')
        const result = vm.$browserStore.clearSession()
        assert(result === true, 'You broke it!!')
      }).then(done)
    })
  })
})
