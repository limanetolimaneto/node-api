const UserModelClass = require("../models/user.model");
const UserModel = new UserModelClass();
const bcrypt = require("bcrypt");  

class UserService {
    constructor(repo){
        this.repo = repo;
        this.userModel = UserModel;
    }

    async listAllUsers(){
        return await this.repo.listAllFromTable(this.userModel.getTableName());
    }

    async create(user){
        
        const saltRounds = 12; 
        const newUser = this.userModel.getFields();
        newUser.name = user.name;
        newUser.email = user.email;
        newUser.password = await bcrypt.hash(user.password, saltRounds);

        return await this.repo.createNewUser(this.userModel.getTableName(),newUser);

    }

    async update(id, user){
        const saltRounds = 12; 
        const updatedUser = this.userModel.getFields();
        updatedUser.name = user.name? user.name : null;
        updatedUser.email = user.email? user.email : null;
        updatedUser.password = user.password? await bcrypt.hash(user.password, saltRounds) : null;
        return await this.repo.updateUser(this.userModel.getTableName(), id, updatedUser);

    }

    async delete(id){
        return await this.repo.deleteUser(this.userModel.getTableName(), id);
    }

}

module.exports = UserService;

