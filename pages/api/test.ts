// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  res.status(200).json(data);
}
