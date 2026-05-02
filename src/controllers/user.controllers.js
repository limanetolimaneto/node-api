class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async getUsers() {
        return await this.userService.findAll();
    }

    index = async (req, res) => {
        const users = await this.getUsers();
        return res.json(users);
    }
}

module.exports = UserController;