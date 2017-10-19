module.exports = {
  local: function (browser) {
    browser
      .url('http://localhost:8080/examples/local/')
      .waitForElementVisible('p', 1000)
      .assert.containsText('p', 'boar', 'You should be implemented !!')
      .end()
  }
}
