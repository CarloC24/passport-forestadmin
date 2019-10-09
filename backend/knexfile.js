// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./migrations/dev.sqlite3"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "postgres",
      user: "postgres",
      password: "postgres",
      port: 5432,
      host: "database-1.cswncgslisak.us-east-1.rds.amazonaws.com"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations"
    }
  }
};
