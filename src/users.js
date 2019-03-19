const userRepository = require("../db/userRepository.js")
const User = require("../db/model/user.js").User;

let getAll = async (req, res) => {
    let users = await userRepository.getUsers();
    res.send(users);
};

let add = async (req, res) => {
    if (!req.body) return res.sendStatus(400);
    
    let user = new User();
    user.name = req.body.name;
    user.age = req.body.age;

    userRepository.addUser(user);
    res.send(user);
};

let update = async (req, res) => {
    if (!req.body) return res.sendStatus(400);

    if (!req.body) return res.status(400).send("User not defined");

    if (!await userRepository.updateUser(req.body))
        return res.status(400).send("User not found");    

    res.send(user);
};

let remove = async (req, res) => {
    if (!req.body.id) return res.sendStatus(400);
    
    let removed = await userRepository.remove(req.body.id);
    if (!removed)
        return res.status(400).send("User not found");    

    res.sendStatus(200);
};

module.exports.getAll = getAll;
module.exports.add = add;
module.exports.update = update;
module.exports.remove = remove;