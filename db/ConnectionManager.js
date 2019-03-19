const typeorm = require("typeorm");

module.exports = class ConnectionManager {
    static async getConnection() {
        if (!this.connection)
            this.connection = await typeorm.createConnection();
        
        return this.connection;
    }
}
