import { knexConfig } from './knexConfig.js'
import crearKnex from 'knex'

const clienteSql = crearKnex(knexConfig)

export {
    clienteSql
}