import createKnexClient from 'knex';
import { mysqlConfig } from './config.js';

export const clienteSql = createKnexClient(mysqlConfig);
