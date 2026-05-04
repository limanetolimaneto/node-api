const UserModelClass = require("../models/user.model")
const UserModel = new UserModelClass();

class FakerService {
    constructor(connect){
        this.connect = connect;
        this.userModel = UserModel;
    }

    async user(){
        const user = this.userModel.getFields();
        user.name = "Test User";
        user.email = "test@email.com";
        user.password = "123";
        const users = await this.connect.create("users",user);
        return users;
    }
}

module.exports = FakerService;