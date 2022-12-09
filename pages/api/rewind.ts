import type { NextApiRequest, NextApiResponse } from 'next'
// const buffer = new Buffer(blob)

require('dotenv').config()
const mysql = require('mysql2/promise')

type Data = {
  username: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const connection = await mysql.createConnection(process.env.DATABASE_URL)
  console.log('Connected to PlanetScale!')

  const {
    query: {id, periodo} ,
    method,
  } = req;
  const q = "SELECT * FROM `recalp` WHERE user_id IN ('" + id + "', '1') AND periodo='" + periodo +  "'";
  // const q_all = "SELECT * FROM `recalp` WHERE user_id='1' AND periodo='" + periodo +  "'";
  connection.query(q) 
  .then(([user]: any) => {
    //allmessages
    const userData = user.find((u:any) => u.user_id === id)
    const serverData = user.find((u:any) => u.user_id === '1')
    // console.log(userData, serverData)
    // userData.messages_by_period.text().then((a: any) => console.log(a))
    // console.log(userData.messages_by_period.text())


    // res.json(user)
    res.status(200).json({
      username: userData.username,
      periodo: periodo,
      allMessages: parseInt(userData.all_messages),
      serverAllMessages: parseInt(serverData.all_messages),
      messagesByMonth: Buffer.from(userData.messages_by_period).toString(),
      messagesByChannel: Buffer.from(userData.messages_by_channel).toString()
    })
  })
  .catch((e: any) => res.status(500).json(e))
  connection.end()
}
