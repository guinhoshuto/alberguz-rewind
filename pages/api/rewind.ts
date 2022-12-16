import type { NextApiRequest, NextApiResponse } from 'next'
import { getObjectWithMostMessages } from '../../utils';

require('dotenv').config()
const mysql = require('mysql2/promise')

type Data = {
  username: string;
}

function blobToJson(b: any){
  const arr:any[] = []
  JSON.parse(Buffer.from(b).toString().replaceAll("'", "\""), (key, value) => {
    arr.push({key: key, value: value})
  })
  return arr
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
    // console.log(id, periodo)
    //allmessages
    const userData = user.find((u:any) => u.user_id === id)
    const serverData = user.find((u:any) => u.user_id === '1')
    console.log(userData, serverData)
    // userData.messages_by_period.text().then((a: any) => console.log(a))
    // console.log(userData.messages_by_period.text())
    // const messagesByMonth = getObjectWithMostMessages(blobToJson(userData.messages_by_period))
    const mostMessagedMonth: any = getObjectWithMostMessages(blobToJson(userData.messages_by_period))
    const messagesByMonth = {
      period: periodo,
      mostMessagedMonth: mostMessagedMonth.key,
      mostMessagedMonthMessages: mostMessagedMonth.value,
      months: blobToJson(userData.messages_by_period)
    }

    const mostMessagedChannel: any = getObjectWithMostMessages(blobToJson(userData.messages_by_channel))
    const messagesByChannel = {
      period: periodo,
      mostMessagedChannel: mostMessagedChannel.key,
      mostMessagedChannelMessages: mostMessagedChannel.value,
      channels: blobToJson(userData.messages_by_channel)
    }

    // const avatar = userData.user_id === '173273321612378112' ? 'https://cdn.discordapp.com/avatars/173273321612378112/f744329c97fc907382ed4e2fef642568.png?size=1024' : userData.avatar;
    // console.log(avatar)

    // res.json(user)
    res.status(200).json({
      username: userData.username,
      periodo: periodo,
      allMessages: parseInt(userData.all_messages),
      serverAllMessages: parseInt(serverData.all_messages),
      messagesByMonth: messagesByMonth,
      messagesByChannel: messagesByChannel,
      joinedAt: userData.joined_at,
      profilePicture: userData.avatar
    })
  })
  .catch((e: any) => res.status(500).json(e))
  connection.end()
}
