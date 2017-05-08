var mongoose = require('mongoose')

var studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },

  studentClass: {
    type: String,
    required: true
  },

  studentSash: {
    type: String,
    default: 'black',
    required: true
  },

  studentHours: {
    type: Number,
    default: 0,
    required: true
  },

  studentHoursRemaining: {
    type: Number
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
