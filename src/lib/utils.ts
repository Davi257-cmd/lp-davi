import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Dispara o evento InitiateCheckout do Facebook Pixel
 * @param value - Valor da conversão (opcional, padrão: 0)
 * @param currency - Moeda (opcional, padrão: 'BRL')
 */
export function trackInitiateCheckout(value: number = 0, currency: string = 'BRL') {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'InitiateCheckout', {
      value: value,
      currency: currency
    });
  }
}