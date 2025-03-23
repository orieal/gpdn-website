import Navbar from "@/components/Navbar";
import SectionOne from "@/pages/Home/SectionOne";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <div className="h-screen w-screen flex flex-col justify-between px-7 md:px-20 pt-8 ">
      <Navbar/>
      <SectionOne/>
      </div>
    </main>
  );
}
