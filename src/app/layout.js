import { Rethink_Sans } from "next/font/google";
import { LanguageProvider } from "./context/LanguageSwitcher";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Vælg de vægte du vil bruge
  variable: "--font-rethink-sans",
});

export const metadata = {
  title: "Praktik ansøgning",
  description: "Lavet af Oscar Lund Albertsen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={`${rethinkSans.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
