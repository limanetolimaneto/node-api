const mysql = require('mysql2');

class MySQLRepository{

    async teste(){
        // 1. Criando a conexão manualmente
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Fortes@123',
            database: 'node'
        });

        // 2. Abrindo a conexão
        connection.connect((err) => {
            if (err) {
                console.error('Erro ao conectar: ' + err.stack);
                return;
            }
            console.log('Conectado com sucesso!');
            });

        // 3. Executando a query de forma manual com callback
        // Usamos "SELECT *" para pegar todos os dados da tabela "usuarios"
        // connection.query('SELECT * FROM usuarios', (err, results, fields) => {
        //   if (err) {
        //     console.error('Erro na consulta: ' + err.message);
        //     return;
        //   }

        //   // "results" contém as linhas (rows) da tabela
        //   console.log('Dados da tabela:');
        //   console.log(results); 
        
        //   // "fields" contém metadados sobre as colunas (raramente usado, mas é o que o banco retorna)
        // });

        // 4. Fechando a conexão manualmente
        connection.end();
    }
}

module.exports = MySQLRepository;

// const path = require('path');
// const fs = require('fs/promises');

// class JsonRepository{
//     constructor(){
//         this.dbPath = path.join(__dirname,'../../db/data.json');
//     }

//     async lastId(table){
//         const raw = await fs.readFile(this.dbPath,'utf-8');
//         return await JSON.parse(raw)[table].at(-1).id;
//     }

//     async readTable(table){
//         const raw = await fs.readFile(this.dbPath,'utf-8');
//         return await JSON.parse(raw)[table]; 
//     }

//     async writeOnTheTable(table, json){
//         const raw = await fs.readFile(this.dbPath,'utf-8');
//         const data = await JSON.parse(raw);
//         data[table].push(json)
//         fs.writeFile(this.dbPath, JSON.stringify(data, null, 2));
//         return await json;
//     }

//     async updateTable(table, id, json){
//         const raw = await fs.readFile(this.dbPath,'utf-8');
//         const data = await JSON.parse(raw);
//         const newData = data[table].map(user => {
//                             // Usamos Number(id) para garantir que "3" seja comparado corretamente com 3
//                             if (user.id === Number(id)) {
//                                 return { ...user, ...json };
//                             }
//                             return user;
//                         });
//         data[table] = newData                
//         fs.writeFile(this.dbPath, JSON.stringify(data, null, 2));
//         return await json;
//     }
    
//     async deleteFromTable(table, id){
//         const raw = await fs.readFile(this.dbPath,'utf-8');
//         const data = await JSON.parse(raw);
//         const newData = data[table].filter(item => item.id !== Number(id));
//         data[table] = newData;
//         fs.writeFile(this.dbPath, JSON.stringify(data, null, 2));
//         return id;
//     }
// }

// module.exports = JsonRepository;

   