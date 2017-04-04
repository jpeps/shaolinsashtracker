var express = require('express')
var router  = express.Router()

// CONTROLLERS
var studentsController = require('../controllers/students.controller.js')

// MIDDLEWARE
var globalMiddleware = require('../middleware')
var authMiddleware   = require('../middleware/authMiddleware')

// student ROUTES
router
  .route('/')
    .get(globalMiddleware.test, studentsController.studentsGetAll)
    .post(authMiddleware.isLoggedIn, studentsController.studentsAddOne)

router
  .route('/new')
    .get(authMiddleware.isLoggedIn, studentsController.studentsRenderNew)

router
  .route('/:studentId')
    .get(studentsController.studentsGetById)
    .put(studentsController.studentsUpdateById)
    .delete(studentsController.studentsDeleteById)

module.exports = router
