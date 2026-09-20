import "./globals.css";

export const metadata = {
  title: "Aditya | Portfolio",
  description: "A portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
