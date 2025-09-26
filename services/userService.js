const userModel = require("../models/userModel");

function getAll() {
  return userModel.findAll();
}

function create(data) {
  if (!data.name) throw new Error("Name is required");
  return userModel.insert(data);
}

module.exports = { getAll, create };
