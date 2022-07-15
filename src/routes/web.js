import express from "express";
import {
    handleUserGetAPI,
    handleDelteUserAPI,
    handleCreateNewUserAPI,
} from "../controller/homeController";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */

const initWebRoutes = app => {
    //test api
    router.post("/users/delete/:id", handleDelteUserAPI);
    router.get("/users/all", handleUserGetAPI);
    router.post("/users/create", handleCreateNewUserAPI);

    return app.use("/", router);
};

export default initWebRoutes;
