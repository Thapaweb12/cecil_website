import Licensing from "@/components/licensing/Licensing";
import Footer from "@/components/static/Footer";
import Navbar from "@/components/static/Navbar";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="pt-[108px] min-h-screen">
        <Licensing />
      </div>
      <Footer />
    </div>
  );
}
