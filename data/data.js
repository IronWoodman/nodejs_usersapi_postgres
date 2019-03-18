const fs = require("fs");
const usersFileName = "./data/users.json";

let getUsers = function() {
    let data = fs.readFileSync(usersFileName, "utf-8");
    let users = JSON.parse(data);
    return users;
}

let saveUsers = function(users) {
    data = JSON.stringify(users);
    fs.writeFileSync(usersFileName, data);
}

module.exports.getUsers = getUsers;
module.exports.saveUsers = saveUsers;