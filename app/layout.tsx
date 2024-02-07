import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "./inter.woff2",
      style: "normal",
    },
  ],
  preload: true,
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
