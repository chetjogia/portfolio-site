// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const message = {
    from: req.body.email,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: "Message from: " + req.body.email,
    text: " Subject: " + req.body.subject + "Message:" + req.body.message,
    html: `<h3>Subject:</h3><p>${req.body.subject}</p><h3>Message:</h3><p>${req.body.message}</p>`,
  };

  let transporter =  nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  if (req.method === "POST") {
    res.send("hello")
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).send({
          error: `Connection refused at ${err}`,
        });
      } else {
        res.status(250).send({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
