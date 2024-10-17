// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as process from "process";

type Data = {
  name: string;
};

const URL = 'https://open.api.nexon.com';

const API_KEY = process.env.NEXT_PUBLIC_NEXON_API_KEY as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const headers = {
    "x-nxopen-api-key": API_KEY
  }

  const { method } = req;
  if (method === 'GET') {

    const url = `${URL}/mabinogi/v1/horn-bugle-world/history?server_name=류트`;
    try {
      const {data} = await axios.get(url, {
        headers
      });
      if (data["horn_bugle_world_history"]) {
        const { horn_bugle_world_history: list } = data;
        res.status(200).json(list);
      }
      res.status(200).json([]);
    } catch (e: any) {
      console.log(e.response.data.error)
      console.log(e.message)
    }
  }
}
