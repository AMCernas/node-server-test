const homeController = require("./controllers/homeController");
const usersController = require("./controllers/usersController");

function router(req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/" && req.method === "GET") {
    homeController.index(req, res);
  } else if (req.url === "/users" && req.method === "GET") {
    usersController.getUsers(req, res);
  } else if (req.url === "/users" && req.method === "POST") {
    usersController.createUser(req, res);
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Not found" }));
  }
}

module.exports = router;
