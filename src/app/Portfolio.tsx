import * as React from "react";
import { NavItem } from "./components/NavItem";
import { ProjectCard } from "./components/ProjectCard";
import { ExperienceCard } from "./components/ExperienceCard";
import { projectsData } from "./data/projects";
import { experienceData } from "./data/experience";

const navItems = ["Home", "Projects", "Experience", "Skills", "Contact"];

export function Portfolio() {
  return (
    <div className="flex overflow-hidden flex-col items-center pt-6 bg-black rounded-sm">
      <nav className="flex flex-row gap-7 justify-center items-center w-full text-sm font-medium leading-none whitespace-nowrap bg-zinc-900 max-w-[1099px] min-h-[60px] rounded-[50px] text-neutral-50 max-md:max-w-full">
        {navItems.map((item) => (
          <NavItem key={item} label={item} />
        ))}
      </nav>

      <header className="flex w-screen">
        <div className="flex flex-col w-screen mx-4 md:mx-24 justify-center items-center min-h-[600px] p-6 mt-24 rounded-xl border border-solid bg-zinc-900 border-zinc-950 max-md:px-5 max-md:mt-10 max-md:max-w-full" >Coming soon...</div>
      </header>

      <section className="flex flex-col mt-24 w-full font-semibold text-center text-white max-w-[1054px] max-md:mt-10 max-md:max-w-full">
        <h2 className="text-6xl max-md:max-w-full max-md:text-4xl">Skills</h2>
        <p className="mt-10 text-4xl max-md:max-w-full">
          C++ | JavaScript | React | NextJs | Docker | GitHub | Figma | Tailwind CSS | Node.js | Express | DSA |
        </p>
      </section>

      <section className="flex flex-col justify-center p-6 mt-24 md:mx-24 mx-4 rounded-xl border border-solid bg-zinc-900 border-zinc-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-3xl font-semibold tracking-tighter leading-tight text-white max-md:max-w-full">
          Experience
        </h2>
        <div className="flex flex-col justify-center mt-10 w-full max-md:max-w-full">
          {experienceData.map((experience, index) => (
            <div key={index} className="flex flex-col mt-10 w-full max-md:max-w-full">
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </section>

      <section className="flex overflow-hidden flex-col justify-center p-6 mt-24 md:mx-24 mx-4 rounded-xl border border-solid bg-zinc-900 border-zinc-950 min-h-[633px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-3xl font-semibold tracking-tighter leading-tight text-white max-md:max-w-full">
          Projects
        </h2>
        <div className="flex flex-col flex-1 mt-10 w-full max-md:max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <footer className="flex flex-row justify-center gap-2.5 self-stretch px-2.5 py-8 mt-80 text-2xl items-center font-semibold text-white bg-zinc-900 min-h-[97px] max-md:mt-10">
        Made by Nikhil
      </footer>
    </div>
  );
}