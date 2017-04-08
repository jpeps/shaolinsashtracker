var mongoose = require('mongoose')

var studentSchema = new mongoose.Schema({
  student_name: {
    type: String,
    required: true
  },

  student_class: {
    type: String,
    required: true
  },

  student_sash: {
    type: String,
    required: true
  },

  student_hours: {
    type: Number,
    required: true
  },

  student_remaining: {
    type: Number,
    required: true
  },

  // ---------- Keep for example ---------- //
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String
  },

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
  // ---------- Keep for example ---------- //
})

module.exports = mongoose.model('Student', studentSchema)
