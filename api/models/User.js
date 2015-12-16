var bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  beforeCreate: function(values, cb) {

    // Encrypt the password before saving.
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return cb(err);
      bcrypt.hash(values.password, salt, function(err, hash) {
        if(err) return cb(err);
        values.password = hash;
        cb();
      });
    });
  },

  beforeUpdate: function(valuesToUpdate, cb) {

    // If the password is not in the new data then end this method.
    if (!valuesToUpdate.hasOwnProperty('password')) {
      return cb();
    }

    // Encrypt the password before saving.
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return cb(err);
      bcrypt.hash(valuesToUpdate.password, salt, function(err, hash) {
        if (err) return cb(err);
        valuesToUpdate.password = hash;
        cb();
      });
    });
  }
};
