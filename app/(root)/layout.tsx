import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen dark:text-gray-400">
      {/* Header */}
      <div className="container py-10">{children}</div>
    </main>
  );
}
