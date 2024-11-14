const BookSchemas = require("../schemas/books_schemas");

const getBook = async (req, res, next) => {
  try {
    const books = await BookSchemas.find().populate("writer_name", "-__v -bio -ijodi");
    res.json(books);
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const writerId = req.params.id;
    const books = await BookSchemas.findById(writerId);
    res.json(books);
  } catch (error) {
    next(error);
  }
};

const addBook = async (req, res, next) => {
  try {
    const { title, author, page, rate, description, publish, genre, writer_name } = req.body;

    await BookSchemas.create({
      title, author, page, rate, description, publish, genre, writer_name
    });
    res.json({
      message: "Added new book",
    });
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const { title, author, page, rate, description, publish, genre, writer_name } = req.body;
    const result = await BookSchemas.findOneAndUpdate({_id: id}, updateData, {new: true})
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleted = await BookSchemas.findByIdAndDelete({_id: id})
    res.json({
      message: "deleted!!!"
    })
  } catch (error) {
    next (error)
  }
}

const searchBook = async (req, res, next) => {
  try{
    const {name} = req.query;
    
    const searchRes = await BookSchemas.find({
      name: {$regex: name, $options: "i"}
  })
  res.json(searchRes)
  }catch(err){
    next (err)
  }
}

module.exports = {
  getBook,
  addBook,
  getOne,
  updateBook,
  deleteBook,
  searchBook
};
