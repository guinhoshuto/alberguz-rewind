import type { NextApiRequest, NextApiResponse } from 'next'

require('dotenv').config()
const mysql = require('mysql2/promise')

type Data = {
  username: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const connection = await mysql.createConnection(process.env.DATABASE_URL)
  console.log('Connected to PlanetScale!')

  const {
    query: {id, periodo} ,
    method,
  } = req;
  const q = "SELECT * FROM `alberguz2022` WHERE author_id = " + id;
  connection.query(q) 
  .then(([user]: any) => {
    //allmessages
    const allMessages = user.reduce((acc: number, messages: any) => acc + messages.messages, 0)
    

    // res.json(user)
    res.json({
      username: user[0].author,
      periodo: periodo,
      allMessages: allMessages,
      emojis: [{sentence: 'a', qtd: 1},{sentence: 'b', qtd: 2}, {sentence:'c', qtd:3}],
      serverEmoji: {sentence: 'a', qtd: 1},
      userPopularWord: {sentence: 'oi', qtd: 1},
      serverPopularWord: {sentence: 'ciao', qtd: 1},
    })
  })
  .catch((e: any) => res.status(500).json(e))
  connection.end()
}
