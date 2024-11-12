import DigitalCard from "@/components/digital-card/DigitalCard";
import Footer from "@/components/static/Footer";
import Navbar from "@/components/static/Navbar";

export default function Home() {
  return (
    <div>
       <Navbar />
        <div className="pt-[108px] min-h-screen">
        <DigitalCard />
        </div>
        <Footer />
      
    </div>
  );
}
