import { db } from "@/app/lib/db";
import { NextRequest } from "next/server";

//데이터를 가져올 때
export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  const data = await db.team.findFirst({where:{
    id : parseInt(params.get("id") as string)
  },
});
  return Response.json(data);
}