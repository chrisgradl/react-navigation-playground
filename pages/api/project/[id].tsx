import { NextApiRequest, NextApiResponse } from "next";
import redis from "../../../lib/redis";

export default async function projects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id.toString();

  if (!id) {
    return res.status(404).json({
      error: {
        code: "not_found",
        message: "Not found",
      },
    });
  }

  try {
    const data = JSON.parse((await redis.hget("projects", id)) || "null");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
