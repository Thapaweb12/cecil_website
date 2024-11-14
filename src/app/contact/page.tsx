import Contact from "@/components/contact/Contact";
import Footer from "@/components/static/Footer";
import Navbar from "@/components/static/Navbar";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="pt-[108px] min-h-screen">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
