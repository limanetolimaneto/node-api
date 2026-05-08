class ClientModel{
    constructor(){
        this.tableName = "clients";
        this.fields = {
            "name": "",
            "email": "",
            "address": "",
        }
    };

    getTableName(){
        return this.tableName;
    }

    getFields(){
        return this.fields
    }
}

module.exports = ClientModel;