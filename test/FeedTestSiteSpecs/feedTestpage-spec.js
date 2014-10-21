jasmine.getFixtures().fixturesPath = '../../src/FeedTestSite';


describe('Test Page Layout', function() {

  beforeEach(function() {
    loadFixtures('index.html');
  });

  afterEach(function() {

  });

  describe('Given the test page', function() {

    it('should has a header', function() {

      var header = $('h1');

      expect(header).toHaveText('Feed Tests');

    });


  });

});