const mongoose = require("mongoose");

//Mongoose schema is not related to GraphQL schema, DB Layer > Mongoose Layer > GraphqlAPI Schema
const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    //pertain to clientId of Client model
    ref: "Client",
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
