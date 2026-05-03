const UserModel = require("../models/user.model");

class UserService {
    constructor(connect){
        this.connect = connect,
        this.userModel = new UserModel()
    }

    async findAll(){
        return this.connect.all(this.userModel.getTableName());
    }

}

module.exports = UserService;


// O que ganho com a DI ?
    //  Hoje userService lê de arquivo      =   fs.readFileSync(...)
    //  Amanhã pode ser banco           =   User.findAll()              // Mongo, Postgres, etc.
    //  Só trocamos a implementação:    >   const userService = new DatabaseUserService();

    //  Testabildade
    //  Posso testar o controller sem acessar arquivo:
    //      const fakeService = {
    //          findAll: () => [{ id: 1, name: 'Mock User' }]
    //      };
    //  const controller = new UserController(fakeService);
    //  Sem DI eu teria que ler o JSON real.

    //  O controller não sabe:
    //      de onde vêm os dados
    //      como são buscados
    //      se é arquivo, API ou banco
    // 
    //  Ele só sabe:
    //      this.userService.findAll()  =   Isso deixa o código muito mais flexível.