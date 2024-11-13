import Home from "@/components/home/Home";
import Footer from "@/components/static/Footer";
import Navbar from "@/components/static/Navbar";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="pt-[108px] min-h-screen">
        <Home />
      </div>
      <Footer />
    </div>
  );
}
