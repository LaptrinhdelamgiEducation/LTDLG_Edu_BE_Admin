import { Pool } from "pg";

export const pool = new Pool({connectionString: process.env.DB_URL});
pool
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database!");
  })
  .catch((err) => {
    console.error("[DEBUG ERROR] Connection failed:", err);
  });
