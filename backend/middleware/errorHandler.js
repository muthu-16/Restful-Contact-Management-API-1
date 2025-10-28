const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
    case constants.NOT_FOUND:
    case constants.SERVER_ERROR:
      res.json({
        title: "Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      res.status(500).json({ message: "Unexpected error" });
  }
};

module.exports = errorHandler;
