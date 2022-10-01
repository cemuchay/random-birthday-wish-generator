// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import generateWish from "../../lib/generateWish";

type Data = {
   message: string;
   success: boolean;
};

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   if (req.method === "POST") {
      try {
         const name = req.body.name ? req.body.name : "";

         res.status(200).json({
            message: generateWish(name),
            success: true,
         });
      } catch (error) {}
   }
}
