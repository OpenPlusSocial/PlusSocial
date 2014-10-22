jasmine.getFixtures().fixturesPath = '../../src/FeedTestSite';


describe('Test Templates', function() {

  beforeEach(function() {
    loadFixtures('ops-feed-lib.html');
  });

  afterEach(function() {

  });

  describe('Given the templates page', function() {

    it('should have a feed template', function() {


      var feed = $('template.ops-feed-per');

      expect(feed).toBeInDOM(); 

    });

    it('should have a feed timeline template', function() {

     
     var feed = $('template.ops-feed-timeline');

      expect(feed).toBeInDOM(); 
    });

  });


   describe('Given the feed template', function() {

    it('should have a feed header', function() {


      var feed = $('template.ops-feed-per h3');

      expect(feed).toBeInDOM(); 

    });

 
  });

   
   describe('Given the feed timeline template', function() {

    it('should have a feed header', function() {


      var feed = $('template.ops-feed-timeline h3');

      expect(feed).toBeInDOM(); 

    });

 
  });

});