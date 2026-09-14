import { Hero } from "@/components/sections/Hero";
import { Institutions } from "@/components/sections/Institutions";
import { About } from "@/components/sections/About";
import { Areas } from "@/components/sections/Areas";
import { Featured } from "@/components/sections/Featured";
import { Method } from "@/components/sections/Method";
import { Talents } from "@/components/sections/Talents";
import { Audience } from "@/components/sections/Audience";
import { Publications } from "@/components/sections/Publications";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="relative">
      <Hero />
      <Institutions />
      <About />
      <Areas />
      <Featured />
      <Method />
      <Talents />
      <Audience />
      <Publications />
      <Contact />
    </main>
  );
}
