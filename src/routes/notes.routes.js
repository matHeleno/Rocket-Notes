const { Router } = require("express")

const NotesController = require("../controllers/NotesController")
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const notesRoutes = Router()

const notesControler = new NotesController()

notesRoutes.use(ensureAuthenticated)

notesRoutes.post("/", notesControler.create)
notesRoutes.get("/:id", notesControler.show)
notesRoutes.delete("/:id", notesControler.delete)
notesRoutes.get("/", notesControler.index)

module.exports = notesRoutes
