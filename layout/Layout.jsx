import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <ScrollToTop>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex">{children}</div>
        <Footer />
      </div>
    </ScrollToTop>
  );
}
