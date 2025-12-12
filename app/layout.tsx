import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';
import Navbar from '@/components/navigation/navbar';
import {roboto} from '@/lib/fonts';
import Footer from "@/components/ui/footer";
import LanguageButton from "@/components/ui/language";

export const metadata: Metadata = {
  title: "Portfolio - Sakab",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-full bg-[#000319] text-white ${roboto.className} antialiased flex flex-col`}
      >
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <Image src="/vfx/spotlight.png" alt="Spotlight" width={1280} height={720} className='w-full h-auto xl:w-[1280px] xl:h-[720px] object-cover object-center absolute top-0 xl:right-0 xl:animate-pulse' />
          <Image src="/vfx/spotlight.png" alt="Spotlight" width={1280} height={720} className='object-cover object-center hidden xl:block absolute xl:top-0 xl:left-0 scale-x-[-1] xl:animate-pulse' />
        </div>
        <Navbar />
        <LanguageButton />
        <main className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
