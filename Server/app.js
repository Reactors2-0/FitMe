const express = require("express");
const connectDb = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });

const app = express();
connectDb();


app.use(express.json());


// app.use(cors());





const PORT = process.env.PORT || 3000;
const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
