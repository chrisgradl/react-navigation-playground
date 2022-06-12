import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

export default async function projects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const vaccRes = await fetch(
      "https://gitlab.com/elga-gmbh/termgit/-/raw/5c16a016d9acda29ac1502e36d445652c42c63d9/terminologies/ValueSet-eimpf-impfstoffe/ValueSet-eimpf-impfstoffe.4.fhir.json"
    );
    const data = await vaccRes.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res
      .status(200)
      .json(data);
  } catch (e) {
    return res.status(500).json({ error: e });
  }
}
