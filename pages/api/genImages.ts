import type { NextApiRequest, NextApiResponse } from 'next'
import { createCanvas } from 'canvas'
import fs from 'fs'

require('dotenv').config()

const width = 1200;
const height = 627;

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    query: {id} ,
    method,
  } = req;
  console.log(id, method);
}
