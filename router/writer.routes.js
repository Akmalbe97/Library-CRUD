const {Router} = require("express")
const {getWriter, addWriter, getOne, updateWriter, deleteWriter, searchWriter} = require("../controller/library_ctr")

const writerRouter = Router()

writerRouter.get("/get_writer", getWriter)
writerRouter.get("/getOne/:id", getOne)
writerRouter.get("/search", searchWriter)
writerRouter.post("/add_writer", addWriter)
writerRouter.put("/update_writer/:id", updateWriter)
writerRouter.delete("/delete_writer/:id", deleteWriter)

module.exports = writerRouter