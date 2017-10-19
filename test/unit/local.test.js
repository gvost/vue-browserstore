import Vue from 'vue'

describe('local', () => {
  let vm

  beforeEach(() => {
    vm = new Vue()
    window.localStorage.clear()
  })

  describe('get local storage', () => {
    it('should not be undefined', done => {
      nextTick(() => {
        const result = vm.$browserStore.local()
        assert(result !== undefined, 'You should be implemented!!')
      }).then(done)
    })
  })
  describe('set local entry', () => {
    it('should return "boo"', done => {
      nextTick(() => {
        vm.$browserStore.setLocal('test', 'boo')
        assert(window.localStorage.getItem('test') === 'boo', 'You broke it!!')
      }).then(done)
    })
  })
  describe('get local entry', () => {
    it('should return "boo"', done => {
      nextTick(() => {
        window.localStorage.setItem('test', 'boo')
        vm.$browserStore.getLocal('test')
        assert(vm.$browserStore.getLocal('test') === 'boo', 'You broke it!!')
      }).then(done)
    })
  })
  describe('remove local entry', () => {
    it('should return true', done => {
      nextTick(() => {
        window.localStorage.setItem('test', 'boo')
        const result = vm.$browserStore.removeLocal('test')
        assert(result === true, 'You broke it!!')
      }).then(done)
    })
  })
  describe('clear local storage', () => {
    it('should return true', done => {
      nextTick(() => {
        window.localStorage.setItem('test', 'boo')
        const result = vm.$browserStore.clearLocal()
        assert(result === true, 'You broke it!!')
      }).then(done)
    })
  })
})
