import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import redis from "../../lib/redis";
import createCodeSnippet from "../../lib/code/createCodeSnippet";
import {Project, ProjectPost} from "../../types";

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
    const { title, payload }: ProjectPost = JSON.parse(body);

    if (!title || !payload) {
      return res.status(400).json({ error: "missing values" });
    }
    const id = uuidv4();

    await createCodeSnippet(payload);

    const newEntry: Project = {
      id,
      payload,
      title,
      createdAt: Date.now(),
    };

    await redis.hset("projects", id, JSON.stringify(newEntry));

    return res.status(200).json(newEntry);
  } catch (e) {
    console.log(e)
    return res.status(500).json({ error: e.message });
  }
}
