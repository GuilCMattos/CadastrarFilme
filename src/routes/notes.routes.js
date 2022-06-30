const { Router } = require('express')

const NotesController = require('../controllers/NotesController')

const NotesRoutes = Router()

const notesController = new NotesController()

NotesRoutes.get('/', notesController.index)
NotesRoutes.post('/:user_id', notesController.create)
NotesRoutes.get('/:id', notesController.show)
NotesRoutes.delete('/:id', notesController.delete)

module.exports = NotesRoutes
