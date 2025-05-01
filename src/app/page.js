import NavBar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import QuoteComponent from "@/components/QuoteComponent";
import ProblemSolver from "@/components/ProblemSolver";
export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroBanner />
      <QuoteComponent />
      <ProblemSolver />
    </main>
  );
}
