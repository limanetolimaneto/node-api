const UserModelClass = require("../models/user.model");
const UserModel = new UserModelClass();

class UserService {
    constructor(connect){
        this.connect = connect;
        this.userModel = UserModel;
    }

    async findAll(){
        return this.connect.all(this.userModel.getTableName());
    }

    async create(user){
        return this.connect.create(this.userModel.getTableName(),user);
    }

    async update(id, user){
        return this.connect.update(this.userModel.getTableName(), id, user);
    }

    async delete(id){
        return this.connect.delete(this.userModel.getTableName(), id);
    }


}

module.exports = UserService;
