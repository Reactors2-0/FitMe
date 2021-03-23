const express = require("express");
const connectDb = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { unknownEndpoints, errorHandler } = require("./middleware/error");
const connectDb = require("./config/db");
const app = express();

dotenv.config({ path: ".env" });

connectDb();


app.use("/api/product", productRouter);
app.use("/api/review", reviewRouter);
app.use(express.json());


// app.use(cors());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);




const PORT = process.env.PORT || 3000;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);

//Handle unhandle promise rejection

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold);
    //close the server
    server.close(() => process.exit(1));
});
