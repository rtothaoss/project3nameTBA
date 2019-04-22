var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DroplistSchema = new Schema({
  title: {
    type: String,
    required: false,
    unique: true
  },
  createdAt: {
    type: Date, 
    default: Date.now
  },
  img: {
    type: String,
    required: false
  },
  summary: {
    type: String,
    required: false
  },
  price: {
      type: String,
      required: false
  },
  style: {
      type: String,
      required: false
  }
});

var Droplist = mongoose.model("Droplist", DroplistSchema);

module.exports = Droplist;
