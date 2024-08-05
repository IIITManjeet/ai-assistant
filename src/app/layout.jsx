import { Open_Sans } from "next/font/google";
import "./index.css";

export const metadata = {
  title: "J&J Speech GPT",
};

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="bg-gradient-to-r from-slate-900 to-slate-700">
        {children}
      </body>
    </html>
  );
}
