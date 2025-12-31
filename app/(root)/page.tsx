import Header from "@/components/Header";
import TradingViewWidget from "@/components/TradingViewWidget";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="flex min-h-screen home-wrapper">
      <Header />
      <div className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
