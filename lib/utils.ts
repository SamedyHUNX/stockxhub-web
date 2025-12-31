import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scriptUrlHelper(chartType: string) {
  return `https://s3.tradingview.com/external-embedding/embed-widget-${chartType}.js`;
}
