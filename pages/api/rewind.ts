// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

require('dotenv').config()
const mysql = require('mysql2/promise')


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const connection = await mysql.createConnection(process.env.DATABASE_URL)
  console.log('Connected to PlanetScale!')

  const {
    query: {id} ,
    method,
  } = req;
  console.log(id, method);
  const q = "SELECT * FROM `alberguz2022` WHERE author_id = " + id;
  connection.query(q) 
  .then((users: any) => res.json(users))
  .catch((e: any) => res.status(500).json(e))
  connection.end()
}
