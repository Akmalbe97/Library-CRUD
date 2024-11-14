const {Router} = require("express")
const {getBook, addBook, getOne, updateBook, deleteBook, searchBook} = require("../controller/books.controller")

const bookRouter = Router()

bookRouter.get("/get_book", getBook)
bookRouter.get("/getOne/:id", getOne)
bookRouter.get("/search", searchBook)
bookRouter.post("/add_book", addBook)
bookRouter.put("/update_book/:id", updateBook)
bookRouter.delete("/delete_book/:id", deleteBook)

module.exports = bookRouter