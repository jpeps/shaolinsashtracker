var mongoose = require('mongoose')

// MODELS
var Student = require('../models/student.model')

module.exports = {

  studentsGetAll: function(req, res) {
    Student.find({}, function(err, allStudents) {
      if (err) {
        console.log(err)
      } else {
        res.render('students/index', { students: allStudents })
      }
    })

    console.log('student get all')
  },

  studentsRenderNew: function(req, res) {
    res.render('students/new')
  },

  studentsAddOne: function(req, res) {
    console.log('poo')
    var newStudent = {
      studentName: req.body.studentName,
      studentClass: req.body.studentClass,
      studentSash: req.body.studentSash,
      studentHours: req.body.studentHours
    }

    console.log('-------------------------------------------------------------')
    console.log(newStudent)
    console.log('-------------------------------------------------------------')

    Student.create(newStudent, function(err, student) {
      if (err) {
        console.log(err)
      } else {
        res.redirect('/students')
      }
    })

    console.log('student add one')
  },

  studentsGetById: function(req, res) {
    Student.findById(req.params.studentId, function(err, found) {
      if (err) {
        console.log(err)
      } else {
        res.render('students/show', { student: found })
      }
    })

    console.log('student get by id')
  },

  studentsUpdateById: function(req, res) {  
    res.send('student update by id')
    console.log('student update by id')
  },

  studentsDeleteById: function(req, res) {
    res.send('student delete by id')
    console.log('student delete by id')
  },

  // ---------- Random Student Methods ---------- //
  studentsUpdateHours: function(req, res) {
    studentNewHours = req.body.studentNewHours

    // Student.findByIdAndUpdate(req.params.studentId, studentNewHours, function(err, updatedStudent){
    //   if (err) {
    //     console.log(err)
    //     res.send('BAD')
    //   } else {
    //     res.redirect('/students')
    //   }
  // })

    res.send('student update hours')
    console.log('student update by id - POOOO')
  }

}

// ----- EXAMPLES ----- //

// Index
// router.get('/', function(req, res) {
//   Campground.find({}, function(err, allCampgrounds) {
//     if (err) {
//       console.log(err)
//     } else {
//       res.render('campgrounds/index', {campgrounds: allCampgrounds})
//     }
//   })
// })

// // New student
// router.student('/', globalMiddleware.isLoggedIn, function(req, res) {
//   var name          = req.body.name
//   var image         = req.body.image
//   var description   = req.body.description
//   var author        = {
//     id: req.user._id,
//     username: req.user.username
//   }
//   var newCampground = { name: name, img: image, desc: description, author: author }
//   Campground.create(newCampground, function(err, campground) {
//     if (err) {
//       console.log(err)
//     } else {
//       campground.author = author
//       res.redirect("/campgrounds")
//     }
//   })
// })

// // New Form
// router.get('/new', globalMiddleware.isLoggedIn, function(req,res) {
//   res.render('campgrounds/new')
// })

// // Show
// router.get('/:id',function(req, res) {
//   Campground.findById(req.params.id).populate('comments').exec(function(err, found) {
//     if (err) {
//       console.log(err)
//     } else {
//       res.render('campgrounds/show', {campground: found})
//     }
//   })
// })

// // Edit
// router.get('/:id/edit', campgroundsMiddleware.checkCampgroundOwnership, function(req,res) {
//   Campground.findById(req.params.id, function(err, campground) {
//     res.render('campgrounds/edit', {campground: campground})
//   })
// })

// // Update
// router.put('/:id', campgroundsMiddleware.checkCampgroundOwnership, function(req, res) {
//   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
//     if (err) {
//       console.log(err)
//       res.redirect('/campgrounds')
//     } else {
//       res.redirect('/campgrounds/' + req.params.id);
//     }
//   })
// })

// // Destroy
// router.delete('/:id', campgroundsMiddleware.checkCampgroundOwnership, function(req, res) {
//   Campground.findByIdAndRemove(req.params.id, function(err){
//     if (err) {
//       console.log(err)
//       res.redirect('/campgrounds')
//     } else {
//       res.redirect('/campgrounds')
//     }
//   })
// })
