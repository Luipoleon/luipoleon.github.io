import '../../styles/globals.css';
import '../../public/styles/main.scss';

export const metadata = {
  title: "Curriculum Vitae",
  description: "A simple CV template for developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
