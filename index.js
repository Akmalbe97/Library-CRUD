const cors = require("cors")
require ("dotenv").config()
const express = require('express')
const mongoose = require("mongoose")
const connectDB = require("./db/library.db")
const writerRouter = require("./router/writer.routes")
const bookRouter = require("./router/books.routes")
const cookieParser = require("cookie-parser")
const errors = require("./middleware/errorMiddlware")

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors({origin: true, credentials: true}))
app.use(cookieParser())
app.use(errors)
connectDB()

app.use(writerRouter)
app.use(bookRouter)

app.listen(PORT, () => {
  console.log("running " + PORT);
  
})