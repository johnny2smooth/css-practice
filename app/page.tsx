import Image from "next/image";
import { Inter, Fraunces, Aleo, Nabla } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });
const italicFraunces = Fraunces({
  subsets: ["latin"],
  weight: ["200"],
  style: ["italic"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const aleo = Aleo({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const nabla = Nabla({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="ff-serif text-6xl p-4">Serif</div>
      <div className="ff-sans-serif text-6xl p-4">Sans Serif</div>
      <div className="ff-cursive text-6xl p-4">Cursive</div>
      <div className="ff-arial text-6xl p-4">Arial</div>
      <div className="ff-eb-garamond text-6xl p-4">EB Garamond</div>
      <div className={`${inter.className} text-6xl p-4`}>Inter from Next!</div>
      <div className={`${italicFraunces.className} text-6xl p-4`}>
        Johnny B. Peterson
      </div>
      <div className={`${fraunces.className} text-6xl p-4`}>
        Fraunces Normal!!!!
      </div>
      <div className={`${aleo.className} text-6xl p-4`}>Aleo</div>
      <div className={`${nabla.className} nabla`}>Johnny B. Peterson</div>
      <div className={`${aleo.className} text-6xl p-4`}>not spaced out</div>
      <div className={`${aleo.className} spaced-out-letters text-6xl p-4`}>
        spaced out letters
      </div>
      <div className={`${aleo.className} spaced-out-words text-6xl p-4`}>
        spaced out words, yo!
      </div>
      <div className={`${aleo.className} underline text-6xl p-4`}>
        Underlined Text
      </div>
      <div className={`${aleo.className} overline text-6xl p-4`}>
        Overlined Text
      </div>
      <div className={`${aleo.className} line-through text-6xl p-4`}>
        Overlined, Underlined, Line Through Text does not work in Tailwind.
      </div>
      <div className={`${aleo.className} line-test text-6xl p-4`}>
        Overlined, Underlined, Line Through Text works in CSS. Even squigglys!
      </div>
      <div className={`${aleo.className} highlight text-6xl p-4`}>
        Highlights to the important things in life!
      </div>
      <div className={`${aleo.className} indent text-6xl p-4`}>
        Who would have known that you can indent text? that is pretty cool,
        isn&apos;t it?
      </div>
      <div className={`${aleo.className} vertical text-6xl p-4`}>Hello!</div>
      <div className={`${aleo.className} vertical upright text-6xl p-4`}>
        Hello!
      </div>
      <div className={`${aleo.className} shadow text-6xl p-4`}>Shadows</div>
      <div className={`${aleo.className} pink-shadow text-6xl p-4`}>
        Pink Shadow
      </div>
      <div className={`${aleo.className} tri-shadow text-8xl p-4`}>
        Tri Shadow
      </div>
      <div className={`${aleo.className} pulp-shadow text-8xl p-4`}>
        Pulp Shadow
      </div>
    </>
  );
}
