const typeorm = require("typeorm");

module.exports = class ConnectionManager {
    static async getConnection() {
        if (!this.connection)
            this.connection = await typeorm.createConnection();
        
        return this.connection;
    }

    static async getRepository(entity) { 
        let connection = await ConnectionManager.getConnection();
        let repository = await connection.getRepository(entity);
        return repository;
    }
}
