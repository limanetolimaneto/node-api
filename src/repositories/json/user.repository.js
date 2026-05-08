class UserRepository{
    constructor(jsonRepository){
        this.jsonRepository = jsonRepository;
    }

    async listAllFromTable(table) {
        return await this.jsonRepository.readTable(table);
    }

    async createNewUser(table, json) {
        const newJson = {
            id: await this.jsonRepository.lastId(table) + 1,
            ...json
        };
        return await this.jsonRepository.writeOnTheTable(table, newJson);
    }

    async updateUser(table, id, json){
        const tableData = await this.jsonRepository.readTable(table);
        const userTableData = tableData.find(item => item.id == id);
        Object.assign(userTableData, json);
        return await this.jsonRepository.updateTable(table, id, userTableData);
    }
   
    async deleteUser(table, id){
        return await this.jsonRepository.deleteFromTable(table, id);
    }
}
    
module.exports = UserRepository;