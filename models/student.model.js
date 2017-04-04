var mongoose = require('mongoose')

var studentSchema = new mongoose.Schema({
  student_title: {
    type: String,
    required: true
  },

  main_image: {
    type: String,
    required: true
  },

  student_body: {
    type: String,
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
