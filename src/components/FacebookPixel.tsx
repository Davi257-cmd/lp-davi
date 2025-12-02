"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function FacebookPixel() {
  useEffect(() => {
    // Inicializa a função trackInitiateCheckout após o carregamento
    if (typeof window !== "undefined" && window.fbq) {
      window.trackInitiateCheckout = function(value: number = 0, currency: string = 'BRL') {
        window.fbq?.('track', 'InitiateCheckout', {
          value: value,
          currency: currency
        });
      };
    }
  }, []);

  return (
    <>
      {/* Meta Pixel - InitiateCheckout Event Helper */}
      <Script
        id="meta-pixel-initiate-checkout"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined' && window.fbq) {
              window.trackInitiateCheckout = function(value, currency) {
                fbq('track', 'InitiateCheckout', {
                  value: value || 0,
                  currency: currency || 'BRL'
                });
              };
            }
          `,
        }}
      />
    </>
  );
}

