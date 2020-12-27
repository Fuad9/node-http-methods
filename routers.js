const router = require("express").Router();

const {
   getAllUsers,
   createUser,
   getUsersById,
   updateUser,
   deleteUser,
} = require("./usersController");

router.get("/", getAllUsers);

router.get("/:id", getUsersById);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
