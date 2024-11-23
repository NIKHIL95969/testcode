import { NavItemProps } from "../types";

export function NavItem({ label }: NavItemProps) {
  return (
    <div className="flex gap-2 self-stretch justify-center items-center self-stretch px-8 my-1 bg-black min-w-[150px] rounded-[50px] max-md:px-5">
      {label}
    </div>
  );
}