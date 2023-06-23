const { Router } = require("express")
const UsersControler = require("../controllers/UsersController")

const usersRoutes = Router()

const usersControler = new UsersControler()

usersRoutes.post("/", usersControler.create)
usersRoutes.put('/:id', usersControler.update)

module.exports = usersRoutes