// const path = require('path');
const fs = require('fs/promises');
const bcrypt = require("bcrypt");          // validar senha     =>  await bcrypt.compare(senhaPura, hash);
const Creater = require("../interfaces/creater.interface");

class UserCreater extends Creater{
    async save(path, data, user){
        return user;
        // const saltRounds = 12; 
        // const newUser = {
        //     id: data.users.length === 0 ? 1 : data.users.length + 1,
        //     ...user, 
        //     password: await bcrypt.hash(user.password, saltRounds),
        // };
        
        // data.users.push(newUser);
        // await fs.writeFile(path, JSON.stringify(data, null, 2));
        // return newUser;
    }
}

module.exports = UserCreater;