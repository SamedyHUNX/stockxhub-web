"use client";

import TradingViewWidget from "@/components/TradingViewWidget";
import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants";
import { scriptUrlHelper } from "@/lib/utils";
import { useMemo } from "react";

export default function HomePage() {
  const marketOverviewConfig = useMemo(() => MARKET_OVERVIEW_WIDGET_CONFIG, []);
  const heatmapConfig = useMemo(() => HEATMAP_WIDGET_CONFIG, []);
  const topStoriesConfig = useMemo(() => TOP_STORIES_WIDGET_CONFIG, []);
  const marketDataConfig = useMemo(() => MARKET_DATA_WIDGET_CONFIG, []);

  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={scriptUrlHelper("market-overview")}
            config={marketOverviewConfig}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            title="Stock Heatmap"
            scriptUrl={scriptUrlHelper("stock-heatmap")}
            config={heatmapConfig}
            className="custom-chart"
            height={600}
          />
        </div>
      </section>
      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            scriptUrl={scriptUrlHelper("timeline")}
            config={topStoriesConfig}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingViewWidget
            scriptUrl={scriptUrlHelper("market-quotes")}
            config={marketDataConfig}
            className="custom-chart"
            height={600}
          />
        </div>
      </section>
    </div>
  );
}
