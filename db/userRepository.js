const User = require("./model/user").User;
const ConnectionManager = require("./ConnectionManager");

let getUsers = async () => {
    let repository = await ConnectionManager.getRepository(User);
    var users = await repository.find();
    console.log("Get users completed");
    return users;    
}

let updateUser = async(user) => {
    let repository = await ConnectionManager.getRepository(User);    
    let userDb = await repository.findOne(user.id);

    if (!userDb) return false;

    userDb.name = user.name;
    userDb.age = user.age;

    await repository.save(userDb);    
    console.log(`User updated:${JSON.stringify(userDb)}`);

    return true;
}

let getUser = async(userId) => {
    let repository = await ConnectionManager.getRepository(User);
    let user = await repository.findOne(userId);    
    console.log(`Get user completed:${JSON.stringify(user)}`);
    return user;
}

let addUser = async user => {        
    let repository = await ConnectionManager.getRepository(User);
    await repository.save(user);
    console.log(`Add user completed:${JSON.stringify(user)}`);
} 

let remove = async userId => {
    let repository = await ConnectionManager.getRepository(User);
    let userDb = await repository.findOne(userId);
    
    if (!userDb) return false;

    await repository.remove(userDb);    
    console.log(`Remove user completed:${JSON.stringify(userDb)}`);
    return true;
}

module.exports = {
    addUser: addUser,
    getUsers: getUsers,
    getUser:  getUser,
    updateUser: updateUser,
    remove: remove
}
