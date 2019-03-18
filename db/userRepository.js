const typeorm = require("typeorm");
const User = require("./model/user").User;
const UserSchema = require("./entity/userschema").UserSchema;

let getUsers = function() {
    console.log("Not implemented");    
}

let saveUsers = function(users) {
    console.log("Not implemented");
}

let getConnection = async => {
    if (!typeorm.connection) {
        typeorm.createConnection({
            name: "default",
            type: "postgres",
            url: 'postgres://postgres:00000000@localhost/users',
            synchronize: true,
            entities: [
                UserSchema
                //require("./entity/userschema")
                //__dirname + "./entity/*.js"
            ]
        });
    }

    let connection = typeorm.getConnection();
    return connection;
}

let addUser = async user => {
    let connection = await getConnection();
    let userRepository = await connection.getRepository(User);
    await userRepository.save(user);
    console.log(`Add user completed:${JSON.stringify(user)}`);
}

module.exports.addUser = addUser;
module.exports.getUsers = getUsers;
module.exports.saveUsers = saveUsers;