require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

connectDb();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Contact Manager API is running 🚀'));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
