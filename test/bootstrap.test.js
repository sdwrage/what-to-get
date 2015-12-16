var Sails = require('sails'),
  sails;

before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(5000);

  Sails.lift({
    // Configuration for testing purposes.
  }, function(err, server) {
    sails = server;
    if (err) return done(err);

    // Here you can load fixtures, etc.
    done(err, sails);
  });
});

after(function(done) {
  // Here you can clear fixtures, etc.
  Sails.lower(done);
});
