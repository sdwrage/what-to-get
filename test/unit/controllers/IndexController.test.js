var request = require('supertest');

describe('IndexController', function() {

  describe('#index()', function() {
    it('should respond with 200', function(done) {
      request(sails.hooks.http.app)
        .get('/')
        .expect(200, done);
    });
  });

});
