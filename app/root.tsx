import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css";

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
        <meta name="fc:frame" content='{"version":"next","imageUrl":"https://monaddashboard.vercel.app/og-image.png","button":{"title":"Open Dashboard","action":{"type":"launch_frame","name":"Monad Metrics","url":"https://monaddashboard.vercel.app","splashImageUrl":"https://monaddashboard.vercel.app/logo.png","splashBackgroundColor":"#0c111f"}}}' />
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