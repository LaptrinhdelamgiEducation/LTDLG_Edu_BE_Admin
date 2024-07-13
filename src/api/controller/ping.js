import { pool } from "../../database/datasource";

export async function ping (req, res) {
    console.log("PonG!");
    const query = `SELECT * FROM accounts`;
    const result = await pool.query(query).then(test => test).catch(err => err);
    return res.send({message: "Query successful!", data: result.rows});
}