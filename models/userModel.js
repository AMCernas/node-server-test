let users = [{ id: 1, name: "Alice" }];

function findAll() {
  return users;
}

function insert(user) {
  const newUser = { id: Date.now(), ...user };
  users.push(newUser);
  return newUser;
}

module.exports = { findAll, insert };
