import knex from 'src/database/datasource';

export const getAllAccount = async () => {
    const result = await knex('accounts').select({
        id: 'id',
        username: 'user_name'
    }).returning('*');
    return result;
}


export const findAccountByUsername = async (username) => {
    const result = await knex('accounts').select({
        id: 'id',
        username: 'user_name',
        hashPassword: 'password_hash'
    }).where('username', username).returning('*');
    return result;
}