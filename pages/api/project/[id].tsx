import { NextApiRequest, NextApiResponse } from "next";
import supabase, { getProjectById } from "../../../lib/supabase";

export default async function projects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id.toString();

  if (!id) {
    return res.status(404).json({
      error: {
        code: 'not_found',
        message: 'Not found'
      }
    });
  }

  try {
    const data = await getProjectById(id);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
