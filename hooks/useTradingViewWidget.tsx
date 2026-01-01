"use client";

import { useEffect, useRef } from "react";

export function useTradingViewWidget({
  scriptUrl,
  config,
  height = 600,
  theme,
}: {
  scriptUrl: string;
  config: Record<string, any>;
  height?: number;
  theme?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Normalize theme: next-themes can return "system", "light", "dark", or undefined
  const normalizedTheme = theme === "light" ? "light" : "dark";
  const themeBackgroundColor =
    normalizedTheme === "light" ? "#F9FAFB" : "#141414";

  const configKey = JSON.stringify({
    ...config,
    colorTheme: normalizedTheme,
    theme: normalizedTheme,
    backgroundColor: themeBackgroundColor,
    isTransparent: false,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous widget
    containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>`;
    delete containerRef.current.dataset.loaded;

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.innerHTML = configKey;

    containerRef.current.appendChild(script);
    containerRef.current.dataset.loaded = "true";

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptUrl, configKey, height]);

  return containerRef;
}
