import type { Metadata } from "next";
import { Days_One, Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "Organic Fruit",
  description: "We sell organic fruit for healthy people",
};

const daysOne = Days_One({
  weight: "400",
  subsets: ["latin"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <div
      className={`${nunito.className} min-h-screen bg-linear-to-br from-[#356B24] to-[#6CBE53] flex flex-col`}
    >
      <nav className="flex justify-center gap-10 py-5 px-8">
        <a
          href="#"
          className="text-white no-underline text-base font-medium tracking-[0.02em] transition-opacity duration-200 hover:opacity-75"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white no-underline text-base font-medium tracking-[0.02em] transition-opacity duration-200 hover:opacity-75"
        >
          Potatoes
        </a>
        <a
          href="#"
          className="text-white no-underline text-base font-medium tracking-[0.02em] transition-opacity duration-200 hover:opacity-75"
        >
          Our story
        </a>
        <a
          href="#"
          className="text-white no-underline text-base font-medium tracking-[0.02em] transition-opacity duration-200 hover:opacity-75"
        >
          Contact
        </a>
      </nav>

      <section className="flex-1 flex flex-col items-center justify-center text-center pt-8 px-6 pb-16 gap-4">
        <h1
          className={`${daysOne.className} text-[clamp(2rem,5vw,3rem)] font-bold text-white leading-[1.2] max-w-140`}
        >
          We sell organic fruit for healthy people
        </h1>
        <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-white/90 max-w-100 mt-1">
          we have the best potatoes, tomatoes, onions
        </p>
        <a
          href="#"
          className="mt-3 bg-[#D65600] hover:bg-[#bf4d00] text-white no-underline rounded-md py-3 px-9 text-base font-semibold cursor-pointer transition-[background-color,transform] duration-200 hover:-translate-y-px active:translate-y-0 inline-block"
        >
          Buy now
        </a>
      </section>
    </div>
  );
}
