import { Metadata } from "next";
import Image from "next/image";
import { Footer, Header } from "./_components";

export const metadata: Metadata = {
  title: "LensFocus - Persistence beats talent",
  description: "A focus timer application with beautiful themes",
};

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/samurai.png"}
          alt="samurai backgraund"
          fill
          className="object-cover"
          priority
        />

        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-4">
          <h2 className="mb-4 text-3xl font-sans font-medium">
            What do you want to focus on?
          </h2>

          {/* Time */}
          <span className="text-9xl font-kanit">25:34</span>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
