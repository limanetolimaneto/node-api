class UserModel{
    constructor(){
        this.tableName = "users";
        this.fields = {
            "name":"",
            "email":"",
            "password":"",
        }
    }
    getTableName(){
        return this.tableName
    }
    getFields(){
        return this.fields
    }

}

module.exports = UserModel