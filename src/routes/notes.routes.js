const { Router } = require("express")

const NotesController = require("../controllers/NotesController")

const notesRoutes = Router()

const notesControler = new NotesController()

notesRoutes.get("/", notesControler.index)
notesRoutes.post("/:user_id", notesControler.create)
notesRoutes.get("/:id", notesControler.show)
notesRoutes.delete("/:id", notesControler.delete)

module.exports = notesRoutes
