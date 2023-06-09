import { withMethods } from "@/lib/api-middlewares/with-method";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { comparing } from "@/lib/comparing";
import { request } from "http";

const reqScheme = z.object({
  text1: z.string().max(1000),
  text2: z.string().max(1000),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body as unknown;
  const apiKey = req.headers.authorization;
  if (!apiKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const parsed = reqScheme.safeParse(body);

  try {
    const { text1, text2 } = reqScheme.parse(body);
    const validApiKey = await db.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true,
      },
    });

    if (!validApiKey) {
      return res.status(401).json({ error: "Unauthoriazed" });
    }

    const start = new Date();
    const similarity = comparing(text1, text2);
    const duration = new Date().getTime() - start.getTime();
    console.log(similarity);

    await db.apiRequest.create({
      data: {
        duration,
        method: req.method as string,
        path: req.url as string,
        status: 200,
        apiKeyId: validApiKey.id,
        usedApiKey: validApiKey.key,
      },
    });

    return res.status(200).json({ success: true, text1, text2, similarity });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues });
    }

    return res.status(500).json({ error: "internal server error" });
  }
};

export default withMethods(["POST"], handler);
