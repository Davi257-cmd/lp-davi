"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function CheckoutPage() {
  useEffect(() => {
    // Dispara o evento InitiateCheckout quando a página carregar
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        value: 0, // Você pode alterar este valor conforme necessário
        currency: 'BRL'
      });
    }
  }, []);

  return (
    <>
      {/* Script do evento InitiateCheckout - será executado quando a página carregar */}
      <Script id="initiate-checkout-event" strategy="afterInteractive">
        {`
          if (typeof window !== 'undefined' && window.fbq) {
            fbq('track', 'InitiateCheckout', {
              value: 0,
              currency: 'BRL'
            });
          }
        `}
      </Script>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Página de Checkout</h1>
          <p className="text-lg text-foreground/70">
            Esta é a primeira página do processo de finalização da compra.
          </p>
          <p className="text-sm text-foreground/50 mt-4">
            O evento InitiateCheckout foi disparado automaticamente.
          </p>
        </div>
      </div>
    </>
  );
}

