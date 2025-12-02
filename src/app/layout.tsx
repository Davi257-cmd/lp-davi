import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Davi Lucas - Sites e Landing Pages Profissionais",
  description: "Desenvolvo sites profissionais e landing pages personalizadas que geram resultados. Design moderno, alta performance e otimizado para conversão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        {/* Meta Pixel Code - Pixel 1 */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1256997199588643');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* Meta Pixel Code - Pixel 2 */}
        <Script id="meta-pixel-2" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1628129654825342');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* Meta Pixel - InitiateCheckout Event */}
        <Script id="meta-pixel-initiate-checkout" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined' && window.fbq) {
              window.trackInitiateCheckout = function(value, currency) {
                fbq('track', 'InitiateCheckout', {
                  value: value || 0,
                  currency: currency || 'BRL'
                });
              };
            }
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1256997199588643&ev=PageView&noscript=1"
            alt=""
          />
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1628129654825342&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
