const users = require("./Users");

/* to get all user data ================= */
exports.getAllUsers = (req, res) => {
   res.json(users.getAllUsers());
};

/* to create user data ================= */
exports.createUser = (req, res) => {
   const { name, email, phone } = req.body;

   const user = users.createUser({
      name,
      email,
      phone,
   });

   res.json(user);
};

/* to get single user data =================== */
exports.getUsersById = (req, res) => {
   let { id } = req.params;

   id = parseInt(id);

   const user = users.getUsersById(id);
   res.json(user);
};

/* to update a user data ===================== */
exports.updateUser = (req, res) => {
   let { id } = req.params;

   id = parseInt(id);

   const { name, email, phone } = req.body;

   const user = users.updateUserById(id, {
      name,
      email,
      phone,
   });

   res.json(user);
};

/* to delete a user data ===================== */
exports.deleteUser = (req, res) => {
   let { id } = req.params;

   id = parseInt(id);

   const user = users.deleteUserById(id);
   res.json(user);
};
