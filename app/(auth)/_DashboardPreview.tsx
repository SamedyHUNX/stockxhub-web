"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DashboardPreview() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder during SSR to avoid hydration mismatch
    return (
      <div className="auth-dashboard-preview absolute top-0 w-360 h-362.5" />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const imageSrc =
    currentTheme === "dark"
      ? "/assets/images/dashboard-dark.png"
      : "/assets/images/dashboard-light.png";

  return (
    <Image
      src={imageSrc}
      alt="dashboard"
      width={1440}
      height={1450}
      className="auth-dashboard-preview absolute top-0"
    />
  );
}
