class UserController{
    constructor(userService) {
        this.service = userService;
    }

    index = async(req,res) => {
        const allUsers = await this.service.listAllUsers();
        return res.json(allUsers);
    }

    store = async(req,res) => {
        const user = req.body;
        const newUser = await this.service.create(user);
        return res.json(newUser);
    }

    update = async(req,res) => {
        const id = req.params.id;
        const userFields = req.body;
        const newUser = await this.service.update(id, userFields);
        return res.json(newUser);
    }

    delete = async(req,res) => {
        const id = req.params.id;
        const deletedUser = await this.service.delete(id);
        return res.json(deletedUser);
    }

}

module.exports = UserController;
