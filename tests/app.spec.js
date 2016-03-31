describe("app", function(){
  browser.get('/#');
  browser.driver.sleep(2000);

  it("should display the correct title", function(){
    expect(browser.getTitle()).toBe('YouTube Playlist');
  });

  it("should display the correct heading", function(){
    expect(browser.element(by.css('h1')).getText()).toBe('My YouTube Playlist');
  });

  var videofeed = browser.element.all(by.repeater('video in feed'));
  it("should return ten videos", function(){
    expect(videofeed.count()).toEqual(10);
  })

  var linktext = videofeed.get(4).element(by.css('.title-link'))
  it("should show Portishead fifth", function(){
    expect(linktext.getText()).toEqual('Portishead - Biscuit')
  })

  it("should goto detailView page", function(){
    linktext.click();
    browser.driver.sleep(500);
    expect(browser.element(by.css('h1')).getText()).toBe('Portishead - Biscuit');
  })

  var backlink = browser.element(by.css('.back-to-list'))
  it("should go backto list when back link is clicked", function(){
    backlink.click();
    browser.driver.sleep(500);
    videofeed = browser.element.all(by.repeater('video in feed'));
    expect(videofeed.count()).toEqual(10);
  })

});
