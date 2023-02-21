import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const db = new PrismaClient();

export default async function betaHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      const { email } = <{ email: string }>req.body;
      await db.reservation.create({ data: { email } });
      res.status(201).send(null);
      break;
    }
    default: {
      res.status(405).send(null);
      break;
    }
  }
}
