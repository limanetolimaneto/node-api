const express = require('express');
const router = express.Router();

const MySQLManager = require('../db-manager/mysql.manager');
const MySQL = new MySQLManager();


// USER ENDPONTS ================================================
    
    router.get('/reset-db', (req, res) => MySQL.build()
                                            .then( () => res.json({ message: 'DB ready' }) )
                                            .catch( err => res.status(500).json({ error: err.message }) )   );

    router.get('/seed-all', (req, res) => MySQL.seed()
                                            .then( () => res.json({ message: 'DB seeded' }) )
                                            .catch( err => res.status(500).json({ error: err.message }) )   );
// ==============================================================

module.exports = router;