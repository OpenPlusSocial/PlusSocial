jasmine.getFixtures().fixturesPath = '../../src/FeedTestSite';


describe('Test Page Layout', function() {

  beforeEach(function() {
    loadFixtures('index.html');
  });

  afterEach(function() {

  });

  describe('Given the test page', function() {

    it('should have a feed for id 1', function() {

      var feed = $('ops-feed-per[data-feed-id="1"]');

      expect(feed).toBeInDOM(); 

    });

  it('should have a feed for id 2', function() {

      var feed = $('ops-feed-per[data-feed-id="2"]');

      expect(feed).toBeInDOM(); 

    });

    it('should have a timeline for id 1 and 2', function() {

      var feed = $('ops-feed-timeline[data-timeline-ids="[1,2]"]');

      expect(feed).toBeInDOM(); 

    });

  });

});