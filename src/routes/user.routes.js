const {Router} = require("express");

const UsersController = require("../controllers/UsersController")

const UserRoutes = Router()


const userController = new UsersController()


UserRoutes.post("/", userController.create);
UserRoutes.put("/:id", userController.update);

module.exports = UserRoutes