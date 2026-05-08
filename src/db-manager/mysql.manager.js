const mysql = require('mysql2/promise'); // Importa a versão com Promises
const bcrypt = require('bcrypt');

class MySQLManager {
    constructor() {
        this.config = {
            host: 'localhost',
            user: 'root',
            password: 'Fortes@123'
        };
    }

    async build() {
        const connection = await mysql.createConnection(this.config);

        try {
            await connection.query('DROP DATABASE IF EXISTS node');
            await connection.query('CREATE DATABASE node');
            await connection.query('USE node');

            const tables = [
                `CREATE TABLE users (
                    id INT AUTO_INCREMENT PRIMARY KEY, 
                    name VARCHAR(255) NOT NULL, 
                    email VARCHAR(255) NOT NULL UNIQUE, 
                    password VARCHAR(255) NOT NULL
                )`,
                `CREATE TABLE clients (
                    id INT AUTO_INCREMENT PRIMARY KEY, 
                    name VARCHAR(255) NOT NULL, 
                    email VARCHAR(255) NOT NULL UNIQUE, 
                    address VARCHAR(255) NOT NULL
                )`
            ];

            for (const sql of tables) {
                await connection.query(sql);
            }
            console.log('Banco de dados preparado com sucesso!');
            
        } catch (error) {
            console.error('Erro ao construir o banco:', error);
            throw error; // Repassa o erro para quem chamou
        } finally {
            await connection.end(); 
        }
    }

    async seed(){
        this.config.database = 'node';
        const connection = await mysql.createConnection(this.config);

        try {
            const saltRounds = 12;
            const hash1 = await bcrypt.hash('123', saltRounds);
            const hash2 = await bcrypt.hash('123', saltRounds);
            const hash3 = await bcrypt.hash('123', saltRounds);
            const hash4 = await bcrypt.hash('123', saltRounds);
            const sqlUsers = `INSERT INTO users (name, email, password) VALUES (?, ?, ?), (?, ?, ?), (?, ?, ?), (?, ?, ?)`;
            const valuesUsers = [
                                'João Silva', 'joao.silva@email.com', hash1,
                                'Maria Oliveira', 'maria.oli@email.com', hash2,
                                'Carlos Souza', 'carlos.souza@email.com', hash3,
                                'Ana Costa', 'ana.costa@email.com', hash4
                            ];
            await connection.query(sqlUsers, valuesUsers);
            console.log("Users table seeded!");
            const sqlClients = `INSERT INTO clients (name, email, address) VALUES (?, ?, ?), (?, ?, ?), (?, ?, ?), (?, ?, ?)`;
            const valuesClients = [
                                'Roberta Lima', 'rob-l@email.com', '10, L. Gray ST. Paarl',
                                'Antonio Costa', 'a-costa@email.com', '2, Rosevelt ST. Paarl',
                                'Jose Carlos', 'j.carlos@email.com', '401, L. Botha ST. Paarl',
                                'Flavia Soares', 'flavia.s@email.com', '82, Boulevarrd AV. Paarl',
                            ];
            await connection.query(sqlClients, valuesClients);
            console.log("Clients table seeded!");
        } catch (error) {
            console.error("Error seeding table", error);
            throw error;
        } finally {
            await connection.end();
        }
    }
}

module.exports = MySQLManager;





