import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";

export async function GET(req: Request) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return Response.json(
      { success: false, message: "Please sign in" },
      { status: 401 }
    );
  }

  return Response.json({
    success: true,
    user: {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      session: {
        expiresAt: session.session.expiresAt,
      },
    },
    message: "Session active",
  });
}
