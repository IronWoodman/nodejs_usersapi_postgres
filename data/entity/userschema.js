const EntitySchema = require("typeorn").EntitySchema;
const User = require("../model/user").User;

module.exports = new EntitySchema({
    name: "user",
    target: User,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        },
        age: {
            type: "int"
        }
    }
});