const path = require('path');
const fs = require('fs/promises');

class JsonRepository{
    constructor(){
        this.dbPath = path.join(__dirname,'../../db/data.json');
    }

    async all(tableName){
        const raw = await fs.readFile(this.dbPath,'utf-8');
        return JSON.parse(raw)[0][tableName];  
    }
            
}

module.exports = JsonRepository;