import prisma from "@/service/prisma";

export async function DELETE(request) {
  try {
    const { anime_mal_id, user_email } = await request.json();
    
    const removeCollection = await prisma.collection.delete({
      where: {
        user_email_anime_mal_id: {
          anime_mal_id: anime_mal_id,
          user_email: user_email
        }
      }
    });
    
    if (!removeCollection) {
      return Response.json({
        status: 404,
        isRemoved: false
      });
    };
    return Response.json({
      status: 200,
      isRemoved: true
    });
  } catch (e) {
    const status = e.code || 500;

    return Response.json({
      status: status,
      error: e.message
    });
  };
};