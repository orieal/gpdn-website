import Navbar from "@/components/Navbar";
import SectionOne from "@/pages/Home/SectionOne";
import SectionTwo from "@/pages/Home/SectionTwo";
import SectionThree from "@/pages/Home/SectionThree";
import SectionFour from "@/pages/Home/SectionFour";
import SectionFive from "@/pages/Home/SectionFive";
import FAQSection from "@/pages/Home/FAQSection";
import Footer from "@/pages/Home/Footer";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between  ">
      <div className="flex  flex-col items-center justify-between gap-10 lg:gap-0 px-7 md:px-16 lg:px-20">
      <div className="h-auto lg:h-screen w-full flex flex-col justify-between pt-8 ">
      <Navbar/>
      <SectionOne/>
      </div>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <FAQSection/>
      </div>
      <Footer/>
    </main>
  );
}
