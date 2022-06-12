import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

const url =
  "https://fhstp.webhook.office.com/webhookb2/534fda77-aced-41cd-b5dd-7bb35c24473d@08d72bfb-9c6e-4a87-8cb5-e86e9a2c4b86/IncomingWebhook/1e6f53924cbe44d2a73a95e7e6ae5e59/454a6c15-5bdc-433b-88aa-e046a323db13";

export default async function projects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const body = req.body;
    const messageRes = await fetch(url, {
      body,
      method: "POST",
    });
    if (messageRes.ok) {
      return res.status(200).json({success: 'yes'});
    }
    throw new Error("Failed fo fetch");
  } catch (e) {
    console.log(e)
    return res.status(500).json({ error: e });
  }
}
