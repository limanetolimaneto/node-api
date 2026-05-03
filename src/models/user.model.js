class UserModel{
    constructor(){
        this.tableName = "users";
    }
    getTableName(){
        return this.tableName
    }

}

module.exports = UserModel