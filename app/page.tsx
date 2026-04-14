export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#F3F6F2] px-6 py-20 text-[#263025] sm:px-10 lg:px-16">
      <main className="flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        <section className="w-full lg:w-[46%]">
          <div className="flex flex-col gap-6 rounded-2xl border border-[#D7DDD4] bg-white p-8 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#637064]">
              Most popular
            </p>
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Weekly Farm Box
              </h1>
              <p className="text-xl font-semibold text-[#2F4A2B] sm:text-2xl">
                From $32/week
              </p>
              <p className="text-base text-[#4F5A46] sm:text-lg">
                12-15 seasonal items · serves 2-4
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F6F1] px-3 py-1 text-sm text-[#465144]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#6F9A66]" />
                Greens
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F6F1] px-3 py-1 text-sm text-[#465144]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#C68A4D]" />
                Roots
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F6F1] px-3 py-1 text-sm text-[#465144]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#C6463D]" />
                Fruit
              </span>
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col gap-6 lg:w-[54%]">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Know exactly what you get this week.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-[#4B5442] sm:text-xl">
              See the full list before you buy. Swap items, skip weeks, or
              switch sizes anytime.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-lg bg-[#263025] px-6 py-3 text-base font-semibold text-[#F3F6F2] transition-colors hover:bg-[#1F261F] sm:text-lg">
              View this week&apos;s box
            </button>
            <a
              className="text-base font-semibold text-[#263025] underline underline-offset-4 sm:text-lg"
              href="#"
            >
              Build my box
            </a>
          </div>
          <p className="text-sm text-[#5A6452] sm:text-base">
            Delivered Tue-Sat · Free neighborhood pickup
          </p>
        </section>
      </main>
    </div>
  );
}
