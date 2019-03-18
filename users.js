const data = require("./data/data.js")

let getAll = function (req, res) {
    let users = data.getUsers();
    res.send(users);
};

let add = function (req, res) {
    if (!req.body) return res.sendStatus(400);

    let userName = req.body.name;
    let userAge = req.body.age;    
    
    let users = data.getUsers();

    let id = Math.max.apply(Math, users.map(function(o) { return o.id; }));

    let user = {id: id + 1, name: userName, age: userAge};    
    users.push(user);
    data.saveUsers(users);
    res.send(user);
};

let update = function (req, res) {
    if (!req.body) return res.sendStatus(400);

    let userId = req.body.id;
    let userName = req.body.name;
    let userAge = req.body.age;

    if (!userId) return res.status(400).send("UserId not defined");

    let users = data.getUsers();
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

    data.saveUsers(users);    
    res.send(user);
};

let remove = function (req, res) {
    if (!req.body) return res.sendStatus(400);

    let userId = req.body.id;

    if (!userId) return res.status(400).send("UserId not defined");

    let users = data.getUsers();
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
    data.saveUsers(users);    
    res.sendStatus(200);
};

module.exports.getAll = getAll;
module.exports.add = add;
module.exports.update = update;
module.exports.remove = remove;