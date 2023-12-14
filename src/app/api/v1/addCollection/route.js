import prisma from "@/service/prisma";

export async function POST(request) {
  try {
    const { anime_mal_id, user_email, anime_image, anime_title } = await request.json();
    const data = { anime_mal_id, user_email, anime_image, anime_title };
    
    const createCollection = await prisma.collection.create({ data });
    
    if (!createCollection) {
      return Response.json({
        status: 500,
        isCreated: false
      });
    };
    return Response.json({
      status: 200,
      isCreated: true
    });
  } catch (e) {
    const status = e.code || 500;

    return Response.json({
      status: status,
      error: e.message
    });
  };
};