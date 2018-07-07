$(function() {


  // Suite I
  describe('RSS Feeds', function() {


    //1/3
    // Example from boilercode - it tests to make sure that the
    // allFeeds variable has been defined and that it is not
    // empty.

    it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });


    // 2/3
    /* Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

     it('have a defined name', function() {
       allFeeds.forEach(function(feed) {
         let name = feed.name;
         expect(name).toBeDefined();
         expect(name.length).not.toBe(0);
       });
     });


    // 3/3
    /* Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

     it('have a defined url', function() {
       allFeeds.forEach(function(feed) {
         let url = feed.url;
         expect(url).toBeDefined();
         expect(url.length).not.toBe(0);
         expect(url).toContain('http');
       });
     });

  });



  // Suite II
  describe('The menu', function() {


    //1/2
    /* Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */

     it('is hidden by default', function() {
       expect($('body').hasClass('menu-hidden')).toBe(true);
     });


    //2/2
     /* Write a test that ensures the menu changes
      * visibility when the menu icon is clicked. This test
      * should have two expectations: does the menu display when
      * clicked and does it hide when clicked again.
      */

      it('changes visibility after menu icon is clicked', function() {
        $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).toBe(false);
        $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).toBe(true);
      })

  });



  // Suite III
  describe('Initial Entries', function() {


    //1/1
    /* Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

     beforeEach(function(done) {
       loadFeed(0, function() {
         done();
       });
     });

     it('there is at least one .entry within .feed container', function(done) {
       //TODO: not so sure about this one
       expect($('.feed').innerHTML).not.toBe('');
       expect($('.entry-link').length).not.toBe(0);
       done();
     });

  });



  // Suite IV
  describe('New Feed Selection', function() {

    //1/1
    /* Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

     // Two feeds that should load one after another
     let feedFour, feedZero;

     beforeEach(function(done) {
       loadFeed(4, function() {
         feedFour = $('.feed').html();
         loadFeed(0, function() {
           feedZero = $('.feed').html();
           done();
         });
       });
     });

    it ('changes content when new feed is loaded', function(done) {
      expect(feedFour).not.toEqual(feedZero);
      done();
    })

  });

}());
