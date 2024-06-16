import  express  from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


// Create 
router.post("/:hotelId",verifyAdmin, createRoom);

// Update
router.put("/:id",verifyAdmin, updateRoom);

// Delete
router.delete("/:id/:hotelId",verifyAdmin, deleteRoom);

// Get a single hotel
router.get("/:id", getRoom);

// Get all hotels
router.get("/", getRooms);

export default router;
