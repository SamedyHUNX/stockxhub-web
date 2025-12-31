import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scriptUrlHelper(chartType: string) {
  return `https://s3.tradingview.com/external-embedding/embed-widget-${chartType}.js`;
}

export const getFlagEmoji = (countryCode: string) => {
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");
};
