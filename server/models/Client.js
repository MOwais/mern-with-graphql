const mongoose = require("mongoose");

//Mongoose schema is not related to GraphQL schema, DB Layer > Mongoose Layer > GraphqlAPI Schema

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("Client", ClientSchema);
