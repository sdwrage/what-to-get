
module.exports = {
  autoPK: false,
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    }
  }
};
