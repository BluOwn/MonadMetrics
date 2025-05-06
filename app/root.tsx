import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css";

// Get the URL from environment or use a fallback
const appUrl = typeof window !== 'undefined' 
  ? window.location.origin 
  : 'https://monad-metrics.vercel.app';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>Monad Testnet Metrics</title>
        <meta name="description" content="Real-time analytics dashboard for Monad Testnet" />
        <meta 
          name="fc:frame" 
          content={`{
            "version": "next",
            "imageUrl": "${appUrl}/og-image.png",
            "button": {
              "title": "Open Dashboard",
              "action": {
                "type": "launch_frame",
                "name": "Monad Metrics",
                "url": "${appUrl}",
                "splashImageUrl": "${appUrl}/logo.png",
                "splashBackgroundColor": "#0c111f"
              }
            }
          }`} 
        />
        <script src="https://cdn.jsdelivr.net/npm/@farcaster/frame-sdk/dist/index.min.js"></script>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}