const UserModel = require("../models/user.model");

class UserController extends UserModel{
    constructor(userService) {
        this.userService = userService;
    }

    async getUsers() {
        return await this.userService.findAll(this.getTableName());
    }

    index = async (req, res) => {
        const users = await this.getUsers();
        return res.json(users);
    }
}

module.exports = UserController;