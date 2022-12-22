const { connect, connection } = require("mongoose");

// wrap Mongoose around local connection to MongoDB
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost/socialNetworkAPI1';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;