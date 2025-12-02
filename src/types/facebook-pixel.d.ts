// Declaração de tipos para o Facebook Pixel
interface Window {
  fbq?: (
    command: 'init' | 'track' | 'trackCustom',
    eventName?: string,
    params?: {
      value?: number;
      currency?: string;
      [key: string]: unknown;
    }
  ) => void;
  trackInitiateCheckout?: (value?: number, currency?: string) => void;
}

