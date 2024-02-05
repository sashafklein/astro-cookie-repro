import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies }) => {
  const tokenFromCookie = cookies.get("userToken") as string | undefined;

  console.log("TOKEN FROM COOKIE", tokenFromCookie);

  return Response.json(
    { success: "ok" },
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
  );
};
