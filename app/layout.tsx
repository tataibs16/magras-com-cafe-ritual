import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://magras-com-cafe-ritual.tataibs16.chatgpt.site"),
  title: "Magras com Café — Body Cream",
  description:
    "Body Cream Barriguinha: um ritual diário de hidratação, firmeza e cuidado para a pele do abdômen.",
  openGraph: {
    title: "Magras com Café — Body Cream",
    description:
      "Cuidado que começa no corpo e continua na sua confiança.",
    url: "https://magras-com-cafe-ritual.tataibs16.chatgpt.site",
    siteName: "Magras com Café",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Magras com Café — Seu ritual começa agora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magras com Café — Body Cream",
    description:
      "Cuidado que começa no corpo e continua na sua confiança.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/brand-favicon.png",
    shortcut: "/brand-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@300;400;500;600;700;800&amp;family=Italianno&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
