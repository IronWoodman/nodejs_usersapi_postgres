const userRepository = require("../db/userRepository.js")
const User = require("../db/model/user.js").User;

let getAll = function (req, res) {
    let users = repository.getUsers();
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

let update = function (req, res) {
    if (!req.body) return res.sendStatus(400);

    let userId = req.body.id;
    let userName = req.body.name;
    let userAge = req.body.age;

    if (!userId) return res.status(400).send("UserId not defined");

    let users = repository.getUsers();
    let user;

    for (let i = 0; i < users.length; i++)
    {
        if (users[i].id == userId)
        {
            user = users[i];
            break;
        }
    }

    if (!user) return res.status(400).send("User not found");

    user.name = userName;
    user.age = userAge;

    repository.saveUsers(users);    
    res.send(user);
};

let remove = function (req, res) {
    if (!req.body) return res.sendStatus(400);

    let userId = req.body.id;

    if (!userId) return res.status(400).send("UserId not defined");

    let users = repository.getUsers();
    let index = -1;
    for (let i = 0; i < users.length; i++)
    {
        if (users[i].id == userId)
        {
            index = i;
            break;
        }
    }

    if (index == -1) return res.status(400).send("User not found");

    users.splice(index, 1)[0];
    repository.saveUsers(users);    
    res.sendStatus(200);
};

module.exports.getAll = getAll;
module.exports.add = add;
module.exports.update = update;
module.exports.remove = remove;