const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { unknownEndpoints, errorHandler } = require("./middleware/error");
const connectDb = require("./config/db");
const app = express();
const expressListRoutes = require('express-list-routes');

dotenv.config({ path: ".env" });

connectDb();
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");

const reviewRouter = require("./routes/review");
const orderRouter = require("./routes/order");
//! Sadek
const adminRouter = require("./routes/Admin");

//! Moetaz Routes
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
// ! Chihab's routes
const brandRouter = require("./routes/brand");

app.use(cors());
app.use(express.json());

app.use(
    fileUpload({
        useTempFiles: true,
    })
);
app.use("/api/brands", brandRouter);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);

app.use("/api/review", reviewRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/admin", adminRouter);


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running....");
    });
}

app.use(unknownEndpoints);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);
// * Display all routes 
expressListRoutes(app);
//Handle unhandle promise rejection

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold);
    //close the server
    server.close(() => process.exit(1));
});
