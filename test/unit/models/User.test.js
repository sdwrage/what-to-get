describe('UserModel', function() {

  describe('#find()', function() {
    it('should check find function', function(done) {
      User.find()
        .then(function(results) {
          // Some tests.
          done();
        })
        .catch(done);
    });
  });

});
