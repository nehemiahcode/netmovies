import Footer from "./Footer";
import Navigation from "./Navbar";


export default function Layout({ children }) {
  return (
    <section>
      <Navigation />
      {children}
      <Footer/>
    </section>
  );
}
