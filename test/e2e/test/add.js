module.exports = {
  add: function (browser) {
    browser
      .url('http://localhost:8080/examples/add/')
      .waitForElementVisible('p', 1000)
      .assert.containsText('p', '2', 'You should be implemented !!')
      .end()
  }
}
