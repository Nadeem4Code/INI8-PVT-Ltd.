import express from "express";
import {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const router = express.Router();

// Route to get all users
router.get("/", getAllUsers);

// Route to add a new user
router.post("/", addUser);

// Route to update user
router.put("/:id", updateUser);

// Route to delete user
router.delete("/:id", deleteUser);

export default router;
