import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel,countByCity, countByType } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create 
router.post("/",verifyAdmin, createHotel);

// Update
router.put("/:id",verifyAdmin, updateHotel);

// Delete
router.delete("/:id",verifyAdmin, deleteHotel);

// Get a single hotel
router.get("/find/:id", getHotel);

// Get all hotels
router.get("/", getHotels);

router.get("/countByCity", countByCity);


router.get("/countByType", countByType);


export default router;
