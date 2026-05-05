const ClientModelClass = require("../models/client.model");
const ClientModel = new ClientModelClass();

class ClientService {
    constructor(repo){
        this.repo = repo;
        this.clientModel = ClientModel;
    }

    async listAllClients(){
        return await this.repo.listAllFromTable(this.clientModel.getTableName());
    }

    async create(client){
            
        const newClient = this.clientModel.getFields();
        newClient.name = client.name;
        newClient.email = client.email;

        return await this.repo.createNewClient(this.clientModel.getTableName(),newClient);
    
    }

    async update(id, client){
        const updatedClient = this.clientModel.getFields();
        client.name? updatedClient.name = client.name : null;
        client.email? updatedClient.email = client.email : null;
        return await this.repo.updateClient(this.clientModel.getTableName(), id, updatedClient);
    }

    async delete(id){
        return await this.repo.deleteClient(this.clientModel.getTableName(), id);
    }

}

module.exports = ClientService;
