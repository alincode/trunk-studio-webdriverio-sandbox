describe.skip('webdriver.io page', function() {
  it('should have the right title', function() {
    browser.url('http://webdriver.io');
    let title = browser.getTitle();
    title.should.be.equal(
      'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
  });
});
