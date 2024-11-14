const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    set: value => value.trim().toLowerCase(),
    minlength: [10, "Eng kami 3 ta harf kiritish kerak"],
    maxlength: [100, "Eng ko'pi bilan 100 so'zdan iborat bo'lishi kerak"]

  },
  author: {
    type: String,
    required: true,
    set: value => value.trim(),
    maxlength: [100, "Eng ko'pi bilan 100 so'zdan iborat bo'lishi kerak"],
  },
  rate: {
    type: Number,
    required: true,
    default: 0
  },
  page: {
    type: String,
    required: true,
    maxlength: [100, "Eng ko'pi bilan 100 so'zdan iborat bo'lishi kerak"],
  },
 publish: {
    type: String,
    required: true,
    maxlength: [100, "Eng ko'pi bilan 100 so'zdan iborat bo'lishi kerak"],
  },
  genre: {
    type: String,
    required: true,
    maxlength: [100, "Eng ko'pi bilan 100 so'zdan iborat bo'lishi kerak"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [100, "Eng ko'pi bilan 100 so'zdan iborat bo'lishi kerak"],
  },
  writer_name: {
    type:  mongoose.Schema.Types.ObjectId,
    ref: "Writer",
    required: true
  },
 
}, 
{
  versionKey: false,
  timestamps: true
})

const Books = mongoose.model("Books", bookSchema)

module.exports = Books