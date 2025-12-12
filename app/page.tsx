import {Button} from "@/components/ui/button";
import CompanyCard from "@/components/ui/company-cards";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react"

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center gap-6">
      <p className="uppercase font-light tracking-[0.2rem] text-xs md:text-sm xl:text-lg">ai, Software & data engineering</p>
      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-center w-[300px] md:w-[400px] xl:w-[800px]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">Software</span> Engineer passionate about generative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">AI</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">IT architecture</span></h1>
      <Button label="Who I've worked with" />
      <div className="w-[300px] md:w-[400px] xl:w-[500px] flex items-center justify-center gap-16 md:gap-26 xl:gap-35">
        <CompanyCard imageUrl="/entreprises/dauphine.svg" />
        <CompanyCard imageUrl="/entreprises/cdc.webp" />
        <CompanyCard imageUrl="/entreprises/orange.svg" />
      </div>
    <Link href="/projects"><Button label="See my projects" icon={<ArrowUpRight />}/></Link>
    </div>
  );
}
