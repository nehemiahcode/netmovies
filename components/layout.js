import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer/>
    </section>
  );
}
