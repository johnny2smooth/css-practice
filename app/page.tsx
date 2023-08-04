import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <div className="ff-serif text-6xl p-4">Serif</div>
      <div className="ff-sans-serif text-6xl p-4">Sans Serif</div>
      <div className="ff-cursive text-6xl p-4">Cursive</div>
      <div className="ff-arial text-6xl p-4">Arial</div>
      <div className="ff-eb-garamond text-6xl p-4">Arial</div>
      <div className={`${inter.className} text-6xl p-4`}>Inter from Next!</div>
    </>
  );
}
