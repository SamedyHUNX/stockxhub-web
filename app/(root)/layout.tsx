import Header from "@/components/Header";
import { getSession } from "@/lib/services/auth.service";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getSession();

  if (!session?.user) redirect("/sign-in");

  const user = {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
  };

  return (
    <main className="min-h-screen dark:text-gray-400">
      <Header user={user} />
      <div className="container py-10">{children}</div>
    </main>
  );
}
