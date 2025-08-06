import NavBar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import QuoteComponent from "@/components/QuoteComponent";
import ProblemSolver from "@/components/ProblemSolver";
import TechStack from "@/components/TechStack";
import MyDevProjects from "@/components/MyDevProjects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section id="home">
        <HeroBanner />
      </section>
      <QuoteComponent />
      <section id="about">
        <ProblemSolver />
      </section>
      <section id="skills">
        <TechStack />
      </section>
      <section id="projects">
        <MyDevProjects />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}