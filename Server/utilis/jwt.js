import { verify } from "jsonwebtoken";
import createError from "./createError";

const verifyToken = (token, secret) => {
    try {
        return verify(token, secret);
    } catch (error) {
        if (error.name === "TokenExpiredError")
            throw createError(401, "Token is expired. Please Login");

        throw error;
    }
};

export default verifyToken;
