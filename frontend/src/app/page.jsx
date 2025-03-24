import Navbar from "@/components/Navbar";
import SectionOne from "@/pages/Home/SectionOne";
import SectionTwo from "@/pages/Home/SectionTwo";
import SectionThree from "@/pages/SectionThree";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between  px-7 md:px-16 lg:px-20">
      <div className="h-auto lg:h-screen w-full flex flex-col justify-between pt-8 ">
      <Navbar/>
      <SectionOne/>
      </div>
      <SectionTwo/>
      <SectionThree/>
    </main>
  );
}
