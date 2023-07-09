import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Threads for Instagram ",
  description: "Generated by create next app",
};

const myFont = localFont({
  src: "./fonts/insta-sans.ttf",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        {children}

      </body>
    </html>
  );
}
