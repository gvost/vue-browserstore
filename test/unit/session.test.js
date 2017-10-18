import Vue from 'vue'

describe('session', () => {
  let vm

  beforeEach(() => {
    vm = new Vue()
  })

  describe('get session storage', () => {
    it('should not be undefined', done => {
      nextTick(() => {
        const test = vm.$browserStore.session()
        assert(test !== undefined, 'You should be implemented!!')
      }).then(done)
    })
  })
})
