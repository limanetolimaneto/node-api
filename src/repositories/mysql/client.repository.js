class ClientRepository{
    constructor(jsonRepository){
        this.jsonRepository = jsonRepository;
    }

    async listAllFromTable(table) {
        return await this.jsonRepository.readTable(table);
    }

    async createNewClient(table, json) {
        const newJson = {
            id: await this.jsonRepository.lastId(table) + 1,
            ...json
        };
        return await this.jsonRepository.writeOnTheTable(table, newJson);
    }

    async updateClient(table, id, json){
        const tableData = await this.jsonRepository.readTable(table);
        const clientTableData = tableData.find(item => item.id == id);
        Object.assign(clientTableData, json);
        return await this.jsonRepository.updateTable(table, id, clientTableData);
    }

    async deleteClient(table, id){
        return await this.jsonRepository.deleteFromTable(table, id);
    }

}

module.exports = ClientRepository;