class UserRepository{
    constructor(repo){
        this.repo = repo;
    }

    async listAllFromTable(table) {
        return await this.repo.teste();
    }


}
    
module.exports = UserRepository;