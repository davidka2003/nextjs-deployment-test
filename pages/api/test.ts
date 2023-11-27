// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ITest } from "@/types";
import { serializeError } from "@/utils";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ITest>) {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  serializeError();
  res.status(200).json(data);
}
