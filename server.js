const express = require("express");
const connectDB = require("./config/db");

const app = express();
const doo = require("./routes/api/auth");

console.log(doo);
//Connect Database
connectDB();

app.get("/", (req, res) => res.send("API running"));

// Define Routes
app.use("/api/users", require("./routes/api/users.js"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
