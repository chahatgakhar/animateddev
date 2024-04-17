import ChooseUs from "@/components/ChooseUs";
import Cover from "@/components/Cover";
import FeaturedServices from "@/components/FeaturedServices";
import Footer from "@/components/Footer";
import MovingCards from "@/components/MovingCards";
import { Team } from "@/components/Team";
import Webinars from "@/components/Webinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.0]">
      <Cover />
      <FeaturedServices />
      <ChooseUs />
      <MovingCards />
      <Webinars />
      <Footer />
    </main>
  );
}
