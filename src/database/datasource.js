import knex from "knex";
import { NODE_ENV } from "src/config/config";
import config from '../knexfile';

export default knex = knex(config[NODE_ENV]);