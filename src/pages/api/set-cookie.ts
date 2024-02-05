import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ cookies }) => {
  const expires = new Date(Date.now() + 1000 * 60 * 60);
  console.log("SETTING", cookies.get("theToken")?.value);
  const token = Date.now().toString();

  cookies.set("theToken", token, { expires, path: "/" });

  console.log("GETTING", cookies.get("theToken")?.value);

  return Response.redirect("http://localhost:4321/");
};
