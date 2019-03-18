const connection = require("./dbConnection");
const User = require("./model/user").User;

let getUsers = function() {
    console.log("Not implemented");    
}

let saveUsers = function(users) {
    console.log("Not implemented");
}

let addUser = async user => {
    await connection.getRepository(User);
    await userRepository.save(user);
    console.log(`Add user completed:${JSON.stringify(user)}`);
}

module.exports.addUser = addUser;
module.exports.getUsers = getUsers;
module.exports.saveUsers = saveUsers;