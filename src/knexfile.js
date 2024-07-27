import knex from "knex";
import { DB, DB_PASSWORD, DB_PORT, DB_URL, DB_USERNAME } from "src/config/config";

const environments = ['development', 'staging', 'production'];

const defaultConfig = knex({
  client: 'pg',
  connection: {
    host: DB_URL,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB
  },
  migrations: {
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  }
});

export default config = environments.map(env => [env, defaultConfig]);
