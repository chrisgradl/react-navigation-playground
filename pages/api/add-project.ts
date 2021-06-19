import { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../lib/supabase";

export default async function addProject(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(501).json({
      error: {
        code: "method_unknown",
        message: "This endpoint only responds to POST",
      },
    });
  }

  try {
    const { body } = req;
    const { title, payload } = JSON.parse(body);

    if (!title || !payload) {
      return res.status(400).json({ error: "missing values" });
    }

    let { data: project, error } = await supabase
      .from("project")
      .insert([{ title, payload }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(project);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
