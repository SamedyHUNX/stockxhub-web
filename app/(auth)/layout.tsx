import BrandLogo from "@/components/BrandLogo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import DashboardPreview from "./_DashboardPreview";
import Testimonial from "@/components/Testimonial";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user) redirect("/");

  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <BrandLogo className="auth-logo" />

        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>

      <section className="auth-right-section">
        <ThemeSwitcher />
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            StockXHub turned what was once a tedious process into a seamless
            experience. Their platform is intuitive, making it easy to manage my
            stock portfolio with confidence.
          </blockquote>

          <Testimonial
            author="Samedy H"
            occupation="Software Developer/Trader"
          />
        </div>

        <div className="flex-1 relative">
          <DashboardPreview />
        </div>
      </section>
    </main>
  );
}
