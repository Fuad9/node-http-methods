class Users {
   constructor() {
      this.users = [];
   }

   //to read all users
   getAllUsers() {
      return this.users;
   }

   //to read specific user
   getUsersById(id) {
      return this.users.find((user) => user.id === id);
   }

   //to create new user
   createUser(user) {
      user.id = this.users.length + 1;
      this.users.push(user);
      return user;
   }

   //to update a user
   updateUserById(id, updatedUser) {
      let index = this.users.findIndex((user) => user.id === id);

      this.users[index].name = updatedUser.name || this.users[index].name;
      this.users[index].email = updatedUser.email || this.users[index].email;
      this.users[index].phone = updatedUser.phone || this.users[index].phone;

      return this.users[index];
   }

   //to delete a specific user
   deleteUserById(id) {
      let index = this.users.findIndex((user) => user.id === id);
      let deletedUser = this.users[index];
      this.users = this.users.filter((user) => user.id !== id);
      return deletedUser;
   }
}

module.exports = new Users();
