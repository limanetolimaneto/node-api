const path = require('path');
const fs = require('fs/promises');
const bcrypt = require("bcrypt");          // validar senha     =>  await bcrypt.compare(senhaPura, hash);


class JsonRepository{
    constructor(userCreater){
        this.dbPath = path.join(__dirname,'../../db/data.json');
        this.userCreater = userCreater;
    }

    async all(tableName){
        const raw = await fs.readFile(this.dbPath,'utf-8');
        return JSON.parse(raw)[tableName];  
    }

    async createUser(data, user){
        const saltRounds = 12; // Custo do processamento (padrão do Laravel)
        const newUser = {
            // Sobrescreve o id do user
            id: data.users.length === 0 ? 1 : data.users.length + 1,
            // Espalha as propriedades originais primeiro
            ...user, 
            // Criptografa o id do user
            password: await bcrypt.hash(user.password, saltRounds),
        };

        data.users.push(newUser);
        await fs.writeFile(this.dbPath, JSON.stringify(data, null, 2));
        return newUser;
    }

    async createClient(data,client){

    }

    async create(tableName, json){
        const raw = await fs.readFile(this.dbPath,'utf-8');
        const data = JSON.parse(raw);
        
        if (tableName === "users") {
            return await this.userCreater.save(this.dbPath, data, json);
        }

        if(tableName === "clients"){
            return await this.createClient( data, json);
        }

    }

    // async create(tableName, json){
    //     const raw = await fs.readFile(this.dbPath,'utf-8');
    //     const data = JSON.parse(raw);
        
    //     if(tableName === "users"){
    //         return await this.createUser(data, json);
    //     }

    //     if(tableName === "clients"){
    //         return await this.createClient(data, json);
    //     }

    // }

    async updateUser(data, id, user){
        const userIndex = data.users.findIndex(u => u.id === Number(id));
        data.users[userIndex].email = user.email;
        await fs.writeFile(this.dbPath, JSON.stringify(data, null, 2));
        return data.users[userIndex];
    }

    async update(tableName, id, json){
        const raw = await fs.readFile(this.dbPath,'utf-8');
        const data = JSON.parse(raw);

        if(tableName === "users"){
            return await this.updateUser(data, id, json);
        }
    }        

    async deleteUser(data, id){
        const index = data.users.findIndex(user => user.id === Number(id));
        // 2. Remove o usuário do array original e o captura ao mesmo tempo
        // O splice retorna um array com os itens removidos, por isso pegamos o [0]
        const deletedUser = data.users.splice(index, 1)[0];
        // 3. Salva o arquivo (o data.users já está atualizado)
        await fs.writeFile(this.dbPath, JSON.stringify(data, null, 2));
        return deletedUser; 
    }

    async delete(tableName, id){
        const raw = await fs.readFile(this.dbPath,'utf-8');
        const data = JSON.parse(raw);

        if(tableName === "users"){
            return await this.deleteUser(data, id);
        }
    }

}

module.exports = JsonRepository;