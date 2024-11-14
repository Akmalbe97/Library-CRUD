const mongoose = require("mongoose")

const writerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    set: value => value.trim().toLowerCase(),
    min: [10, "Eng kami 3 ta harf kiritish kerak"],
    max: [100, "Eng ko'pi bilan 100 so'zdan iborat bo'lishi kerak"]

  },
  bio: {
    type: String,
    required: true,
    set: value => value.trim(),
    max: [100, "Eng ko'pi bilan 100 so'zdan iborat bo'lishi kerak"]

  },
  ijodi: {
    type: String,
    required: true,
    set: value => value.trim().toLowerCase(),
    max: [100, "Eng ko'pi bilan 100 so'zdan iborat bo'lishi kerak"]

  },
  asarlari: {
    type: String,
    required: true,
    max: [100, "Eng ko'pi bilan 100 so'zdan iborat bo'lishi kerak"],
  },
  reyting: {
    type: Number,
    default: 0
  }
}) 

const Writer = mongoose.model("Writer", writerSchema)

module.exports = Writer