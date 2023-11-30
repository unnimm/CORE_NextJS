import { db } from "@/app/lib/db";
import { NextRequest } from "next/server";

//데이터를 가져올 때
export async function GET(req: Request) {
  const data = await db.team.findMany({});
  return Response.json(data);
}

// //데이터를 추가할 때
// export async function POST(req: NextRequest) {
//   const data = await db.team.create({
//     data: {
//       name: "000",
//       department: "000힉과",
//     },
//   });
//   return Response.json(data);
// }

// //데이터를 추가할 때
// export async function POST(req: NextRequest) {
//   const params = req.nextUrl.searchParams;
//   const data = await db.team.create({
//     data: {
//       name: params.get("name") as string,
//       department : params.get('department') as string,
//     },
//   });
//   return Response.json(data)
// }

// id를 사용해서 데이터를 추가할 때
export async function POST(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const data = await db.team.findMany({})
  const id = data[data.length-1].id

  const data2 = await db.team.create({
    data: {
      name: `${id}번째 글 입니다.`,
      department : params.get('department') as string,
    },
  });
  return Response.json(data2)
}

//데이터를 수정할 때
export async function PUT(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  const updatePost = await db.team.update(
    {
      where : {
        id : parseInt(params.get("id") as string)
      },
      data : {
        name : params.get("name") as string, 
      }
    }
  )
  return Response.json(updatePost)
}

//데이터를 삭제할 때
export async function DELETE(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  const deletePost = await db.team.delete(
    {where:{
      id : parseInt(params.get("id") as string)
    },
  }
  )
  return Response.json(deletePost)
}
