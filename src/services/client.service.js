const ClientModelClass = require("../models/client.model");
const ClientModel = new ClientModelClass();

class ClientService {
    constructor(connect){
        this.connect = connect;
        this.clientModel = ClientModel;
    }

    async findAll(){
        return this.connect.all(this.clientModel.getTableName());
    }

    async create(client){
        return this.connect.create(this.clientModel.getTableName(),client);
    }

    async update(id, client){
        return this.connect.update(this.clientModel.getTableName(), id, client);
    }

    async delete(id){
        return this.connect.delete(this.clientModel.getTableName(), id);
    }


}

module.exports = ClientService;
