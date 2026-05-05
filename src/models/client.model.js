class ClientModel{
    constructor(){
        this.tableName = "clients";
        this.fields = {
            "name": "",
            "email": "",
            "address": {
                "number": "",
                "street": "",
                "town": ""
            },
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