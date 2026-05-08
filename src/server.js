const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const clientRoutes = require('./routes/client.routes');
const mysqlRoutes = require('./routes/mysql.routes');

app.use(express.json());

app.use('/users', userRoutes);

app.use('/clients', clientRoutes);

app.use('/mysql', mysqlRoutes);

app.listen(3000, () => {
    console.log('Server running')
})

