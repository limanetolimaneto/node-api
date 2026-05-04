class UserController{
    constructor(userService) {
        this.service = userService;
    }

    async getUsers() {
        return await this.service.findAll();
    }

    index = async (req, res) => {
        const users = await this.getUsers();
        return res.json(users);
    }

    store = async (req, res) => {
        const user = req.body;
        const newUser = await this.service.create(user);
        return res.json(newUser);
    }

    update = async (req, res) => {
        const id = req.params.id;
        const user = req.body;
        const newUser = await this.service.update(id, user);
        return res.json(newUser);
    }

    delete = async (req, res) => {
        const id = req.params.id;
        const deletedUser = await this.service.delete(id);
        return res.json(deletedUser);
    }

}

module.exports = UserController;