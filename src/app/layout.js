import { Inter } from "next/font/google";
import '../../styles/globals.css';
import '../../public/styles/main.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Curriculum Vitae",
  description: "A simple CV template for developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
