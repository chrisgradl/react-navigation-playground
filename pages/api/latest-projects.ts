import { NextApiRequest, NextApiResponse } from "next";
import { getProjects } from "../../lib/supabase";

export default async function projects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await getProjects();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: e });
  }
}
