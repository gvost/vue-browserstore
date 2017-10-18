module.exports = {
  session: function (browser) {
    browser
      .url('http://localhost:8080/examples/session/')
      .waitForElementVisible('p', 1000)
      .assert.containsText('p', '0', 'You should be implemented !!')
      .end()
  }
}
