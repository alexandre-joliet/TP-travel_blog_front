import "./globals.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

export const metadata = {
  title: "O'Voyages",
  description: "Bienvenue sur mon blog, où vous trouverez ici une passerelle vers mes aventures, mes expériences uniques et mes destinations favorites. Que vous soyez un voyageur aguerri ou un explorateur en herbe, ce blog est votre guide pour plonger avec moi au cœur de destinations fascinantes à travers le globe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
