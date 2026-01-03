import TradingViewWidget from "@/components/TradingViewWidget";
import WatchlistButton from "@/components/WatchlistButton";
import {
  SYMBOL_INFO_WIDGET_CONFIG,
  CANDLE_CHART_WIDGET_CONFIG,
  BASELINE_WIDGET_CONFIG,
  TECHNICAL_ANALYSIS_WIDGET_CONFIG,
  COMPANY_PROFILE_WIDGET_CONFIG,
  COMPANY_FINANCIALS_WIDGET_CONFIG,
} from "@/lib/constants";
import { scriptUrlHelper } from "@/lib/utils";

export default async function StockDetailsPage({
  params,
}: StockDetailsPageProps) {
  const { symbol } = await params;

  return (
    <div className="flex min-h-screen p-4 md:p-6 lg:py-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <TradingViewWidget
            scriptUrl={scriptUrlHelper("symbol-info")}
            config={SYMBOL_INFO_WIDGET_CONFIG(symbol)}
            height={170}
          />

          <TradingViewWidget
            scriptUrl={scriptUrlHelper("advanced-chart")}
            config={CANDLE_CHART_WIDGET_CONFIG(symbol)}
            className="custom-chart"
            height={600}
          />

          <TradingViewWidget
            scriptUrl={scriptUrlHelper("advanced-chart")}
            config={BASELINE_WIDGET_CONFIG(symbol)}
            className="custom-chart"
            height={600}
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <WatchlistButton
              symbol={symbol.toUpperCase()}
              company={symbol.toUpperCase()}
              isInWatchlist={false}
            />
          </div>

          <TradingViewWidget
            scriptUrl={scriptUrlHelper("technical-analysis")}
            config={TECHNICAL_ANALYSIS_WIDGET_CONFIG(symbol)}
            height={400}
          />

          <TradingViewWidget
            scriptUrl={scriptUrlHelper("symbol-profile")}
            config={COMPANY_PROFILE_WIDGET_CONFIG(symbol)}
            height={440}
          />

          <TradingViewWidget
            scriptUrl={scriptUrlHelper("financials")}
            config={COMPANY_FINANCIALS_WIDGET_CONFIG(symbol)}
            height={464}
          />
        </div>
      </section>
    </div>
  );
}
