import "./globals.css";
export const metadata = {
  title: "Netmoves.net",
  description: "Stream out your stress. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
