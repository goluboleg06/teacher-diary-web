const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ['чоловіча', 'жіноча'],
      required: true,
    },
    momnumber: String,
    dadnumber: String,
    group: {
      type: String,
      required: true,
  }},
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model('Post', PostSchema);
