import { navigationLinks } from "../../utils/content";
import BellIcon from "../Icons/BellIcon";
import CaretUp from "../Icons/CaretUp";
import LogoIcon from "../Icons/LogoIcon";
import SearchIcon from "../Icons/SearchIcon";
import DesktopDropdown from "./DesktopDropdown";

export default function Navigation() {
  return (
    <nav className="m-auto mb-12 max-w-432">
      <div className="flex  justify-between px-21.5 pt-8 pb-23">
        <a href="/" className="flex items-center gap-2">
          <LogoIcon className="size-14" />
          <span className="text-3xl font-semibold">GoTravel</span>
        </a>
        <ul className="flex items-stretch gap-x-10 text-lg ">
          {
            navigationLinks.map((link) => ( 
              <li key={link.id} className="font-medium group flex items-center cursor-pointer relative gap-x-1.75 transition-all duration-200">
                <a href={link.href} className="text-gray-600 group-hover:text-black">{link.text}</a>
                {link.dropdown && <span className="flex size-6 items-center justify-center"> <CaretUp className="size-3.5 fill-grey-800 rotate-180 transition-all duration-250 group-hover:rotate-360"/></span>}
                {link.dropdown && <DesktopDropdown links={link.dropdownLinks}/>}
              </li>
            ))
          }
        </ul>
        <div className="flex items-center gap-x-5">
          <BellIcon className="fill-grey-700 cursor-pointer hover:fill-black" />
          <SearchIcon className="fill-grey-700 cursor-pointer hover:fill-black" />
          <button className="bg-primary-700  hover:bg-primary-800 cursor-pointer rounded-[0.625rem] px-8 py-3.5 text-lg font-medium text-white transition-all duration-200">Join Now</button>
        </div>
      </div>
    </nav>
  );
}