import  express  from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/*router.get("/prova",verifyToken,(req,res,next)=>{
  res.send("Olá estou autenticado")
});

router.get("/prova/:id",verifyUser,(req,res,next)=>{
  res.send("Olá estou autenticado e pode eliminar")
});

router.get("/admin/:id",verifyAdmin,(req,res,next)=>{
  res.send("Olá Admin estou autenticado e pode fazer todas ações")
});
*/


// Update
router.put("/:id",verifyUser, updateUser);

// Delete
router.delete("/:id",verifyUser, deleteUser);

// Get a single hotel
router.get("/:id",verifyUser, getUser);

// Get all hotels
router.get("/",verifyAdmin, getUsers);


export default router;
