const Writer = require("../schemas/writer_schemas");

const getWriter = async (req, res, next) => {
  try {
    const writers = await Writer.find();
    res.json(writers);
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const writerId = req.params.id;
    const writers = await Writer.findById(writerId);
    res.json(writers);
  } catch (error) {
    next(error);
  }
};

const addWriter = async (req, res, next) => {
  try {
    const { name, bio, ijodi, asarlari, reyting } = req.body;

    await Writer.create({
      name,
      bio,
      ijodi,
      asarlari,
      reyting,
    });
    res.json({
      message: "Added new author",
    });
  } catch (error) {
    next(error);
  }
};

const updateWriter = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const { name, bio, ijodi, asarlari, reyting } = req.body;
    const result = await Writer.findOneAndUpdate({_id: id}, updateData, {new: true})
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const deleteWriter = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleted = await Writer.findByIdAndDelete({_id: id})
    res.json({
      message: "deleted!!!"
    })
  } catch (error) {
    next (error)
  }
}

const searchWriter = async (req, res, next) => {
  try{
    const {name} = req.query;
    
    const searchRes = await Writer.find({
      name: {$regex: name, $options: "i"}
  })
  res.json(searchRes)
  }catch(err){
    next (err)
  }
}

module.exports = {
  getWriter,
  addWriter,
  getOne,
  updateWriter,
  deleteWriter,
  searchWriter
};
