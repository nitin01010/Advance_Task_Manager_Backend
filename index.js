require("dotenv").config();
const express = require("express");
const { dbConnection } = require("./Lib/dbConnection");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5050;


dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/task", require("./Routes/task"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
