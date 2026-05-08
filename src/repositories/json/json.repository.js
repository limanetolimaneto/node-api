const path = require('path');
const fs = require('fs/promises');

class JsonRepository{
    constructor(){
        this.dbPath = path.join(__dirname,'../../../db/data.json');
    }

    async lastId(table){
        const raw = await fs.readFile(this.dbPath,'utf-8');
        return await JSON.parse(raw)[table].at(-1).id;
    }

    async readTable(table){
        const raw = await fs.readFile(this.dbPath,'utf-8');
        return await JSON.parse(raw)[table]; 
    }

    async writeOnTheTable(table, json){
        const raw = await fs.readFile(this.dbPath,'utf-8');
        const data = await JSON.parse(raw);
        data[table].push(json)
        fs.writeFile(this.dbPath, JSON.stringify(data, null, 2));
        return await json;
    }

    async updateTable(table, id, json){
        const raw = await fs.readFile(this.dbPath,'utf-8');
        const data = await JSON.parse(raw);
        const newData = data[table].map(user => {
                            // Usamos Number(id) para garantir que "3" seja comparado corretamente com 3
                            if (user.id === Number(id)) {
                                return { ...user, ...json };
                            }
                            return user;
                        });
        data[table] = newData                
        fs.writeFile(this.dbPath, JSON.stringify(data, null, 2));
        return await json;
    }
    
    async deleteFromTable(table, id){
        const raw = await fs.readFile(this.dbPath,'utf-8');
        const data = await JSON.parse(raw);
        const newData = data[table].filter(item => item.id !== Number(id));
        data[table] = newData;
        fs.writeFile(this.dbPath, JSON.stringify(data, null, 2));
        return id;
    }
}

module.exports = JsonRepository;

   