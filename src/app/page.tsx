import Nav from "@components/layout/Nav";
import Home from "@components/features/Home";
import Projects from "@components/features/Projects";
import Contact from "@components/features/Contact";
import Footer from "@components/layout/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
