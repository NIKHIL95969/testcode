import { ExperienceCardProps } from "../types";

export function ExperienceCard({ companyName, duration, description }: ExperienceCardProps) {
  return (
    <article className="flex flex-col w-full text-white max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full text-2xl font-semibold tracking-tight leading-none min-h-[32px] max-md:max-w-full">
        <h3>{companyName}</h3>
        <span>{duration}</span>
      </div>
      <p className="mt-5 text-base leading-7 max-md:max-w-full">
        {description}
      </p>
    </article>
  );
}