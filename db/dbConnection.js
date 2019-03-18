const createConnection = require("typeorm").createConnection;

module.exports = class DbConnection {
    prototype.connect()  => {    
        this.connection = await createConnection({
            type: "postgres",
            url: 'postgres://postgres:00000000@localhost/users',
            synchronize: true,
            entities: [
                __dirname + "/entity/*.js"
            ]
        });
    }
}