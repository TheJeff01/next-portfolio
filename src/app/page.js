import NavBar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import QuoteComponent from "@/components/QuoteComponent";
import ProblemSolver from "@/components/ProblemSolver";
import TechStack from "@/components/TechStack";
import MyDevProjects from "@/components/MyDevProjects";
export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroBanner />
      <QuoteComponent />
      <ProblemSolver />
      <TechStack />
      <MyDevProjects />
    </main>
  );
}
