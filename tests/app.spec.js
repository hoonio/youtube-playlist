describe("app", function(){
  browser.get('/#');
  browser.driver.sleep(3000);
  // browser.wait(protractor.ExpectedConditions.elementToBeClickable(browser.element(by.css('.title-link'))));
  // browser.manage().timeouts().implicitlyWait(5000);

  // it('should wait for the video feed to load', function() {
  //   expect(browser.element(by.css('videoFeed')).waitReady()).toBeTruthy();
  // });

  it("should display the correct title", function(){
    expect(browser.getTitle()).toBe('YouTube Playlist');
  });

  it("should display the correct heading", function(){
    expect(browser.element(by.css('h1')).getText()).toBe('My YouTube Playlist');
  });

});
