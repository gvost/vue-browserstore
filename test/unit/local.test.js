import Vue from 'vue'

describe('local', () => {
  let vm

  beforeEach(() => {
    vm = new Vue()
  })

  describe('get local storage', () => {
    it('should not be undefined', done => {
      nextTick(() => {
        const test = vm.$browserStore.local()
        assert(test !== undefined, 'You should be implemented!!')
      }).then(done)
    })
  })
})
