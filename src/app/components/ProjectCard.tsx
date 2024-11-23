import { ProjectCardProps } from "../types";

export function ProjectCard({ title, description, liveLink, githubLink }: ProjectCardProps) {
  return (
    <article className="flex flex-col flex-1 shrink justify-between p-4 rounded-lg border border-solid basis-0 bg-zinc-900 border-zinc-950 min-h-[250px] min-w-[240px]">
      <div className="flex flex-col flex-1 w-full">
        <h3 className="text-2xl font-semibold tracking-tight leading-none text-white">
          {title}
        </h3>
        <p className="mt-2.5 text-base leading-7 text-neutral-50">
          {description}
        </p>
      </div>
      <div className="flex gap-10 justify-between items-center w-full h-10 text-sm font-medium leading-none whitespace-nowrap">
        <a href={liveLink} className="flex gap-2 self-stretch justify-center items-center px-8 py-3 my-auto bg-white rounded-md min-h-[44px] text-zinc-950 w-[133px] max-md:px-5">
          Live
        </a>
        <a href={githubLink} className="flex gap-2 self-stretch justify-center items-center px-8 py-3 my-auto bg-black rounded-md min-h-[44px] text-zinc-100 w-[133px] max-md:px-5">
          Github
        </a>
      </div>
    </article>
  );
}