import express from "express";
import { addFavourite } from "../controllers/qoute.controller.js";


const QouteRouter=express.Router();
QouteRouter.post("/",addFavourite)

export {
    QouteRouter
}