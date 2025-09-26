const userService = require("../services/userService");
const parseBody = require("../utils/parseBody");

async function getUsers(req, res) {
  const users = userService.getAll();
  res.writeHead(200);
  res.end(JSON.stringify(users));
}

async function createUser(req, res) {
  try {
    const body = await parseBody(req);
    const newUser = userService.create(body);
    res.writeHead(201);
    res.end(JSON.stringify(newUser));
  } catch (error) {
    res.writeHead(400);
    res.end(JSON.stringify({ error: error.message }));
  }
}

module.exports = { getUsers, createUser };
