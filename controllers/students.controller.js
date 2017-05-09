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
    },
    
    studentsRenderNew: function(req, res) {
        res.render('students/new')
    },
    
    studentsAddOne: function(req, res) {
        var newStudent = {
            studentName: req.body.studentName,
            studentClass: req.body.studentClass,
            studentSash: req.body.studentSash,
            studentHours: req.body.studentHours
        }
        
        Student.create(newStudent, function(err, student) {
            if (err) {
                console.log(err)
            } else {
                res.redirect('/students')
            }
        })
    },
    
    // TODO
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
    
    // TODO
    studentsUpdateById: function(req, res) {  
        res.send('student update by id')
        console.log('student update by id')
    },
    
    // TODO
    studentsDeleteById: function(req, res) {
        res.send('student delete by id')
        console.log('student delete by id')
    },
    
    // ---------- Random Student Methods ---------- //
    studentsUpdateHours: function(req, res) {
        Student.findById(req.params.studentId, function(err, student) {
            if (err) {
                console.log(err)
            } else {
                studentNewHours = parseInt(req.body.studentNewHours)
                studentNewHours = parseInt(student.studentHours) + studentNewHours
                
                Student.update( { _id: student._id }, { $set: { studentHours: studentNewHours } }, function(err, updatedStudent) {
                    if (err) {
                        console.log(err)
                    } else {
                        res.redirect('/students')
                    }
                })
            }
        })
    }
}