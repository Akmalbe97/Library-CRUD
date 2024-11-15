function errorHandler(error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    success: false,
    message: error.message || "Serverda xato yuz berdi",
  });
};


module.exports = errorHandler