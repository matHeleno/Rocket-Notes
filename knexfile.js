const path = require('path')

module.exports = {
  development: {
      client: 'sqlite3',
      connection: {
        filename: path.resolve(__dirname, "src", "database", "database.bd")
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
      useNullAsDefault: true
  }
};
