const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")

const fs = require("fs")
const path = require("path")
const { notes } = require("./db/db")
const express = require("express")
const PORT = process.env.Port || 3002;
const app = express();

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use("/api", apiRoutes);

app.use("/", htmlRoutes);

app.use(express.static("public"));


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})