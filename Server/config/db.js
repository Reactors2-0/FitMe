import { connect } from "mongoose";
const connectDB = async () => {
    const conn = await connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
    console.log(
        `Mongo database connected on ${conn.connection.host}`.cyan.underline.bold
    );
};

export default connectDB;
