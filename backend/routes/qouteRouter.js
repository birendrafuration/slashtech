import express from "express";
import { addFavourite, getFavourites } from "../controllers/qoute.controller.js";


const QouteRouter=express.Router();
QouteRouter.post("/",addFavourite)
QouteRouter.get("/",getFavourites)

export {
    QouteRouter
}