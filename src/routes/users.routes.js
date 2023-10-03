const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const UsersControler = require("../controllers/UsersController")
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const usersControler = new UsersControler()
const userAvatarController = new UserAvatarController()

usersRoutes.post("/", usersControler.create)
usersRoutes.put('/', ensureAuthenticated,  usersControler.update)
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes