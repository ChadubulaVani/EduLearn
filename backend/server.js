const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

// Import routes
const quizRoutes = require("./routes/quizRoutes");
app.use("/api/quiz", quizRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🎉 Server running on port ${PORT}`));
