const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")
const fs = require("fs")
const path = require("path")
const { notes } = require("./db/db")
const express = require("express")
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use("/api", apiRoutes);

app.use("/", htmlRoutes);

app.use(express.static("public"));


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})