import { NextApiRequest, NextApiResponse } from "next";
import redis from "../../lib/redis";

export default async function projects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const features = (await redis.hvals("projects"))
      .map((entry) => JSON.parse(entry))
      .sort((a, b) => b.createdAt - a.createdAt);
    return res.status(200).json(features);
  } catch (e) {
    return res.status(500).json({ error: e });
  }
}
