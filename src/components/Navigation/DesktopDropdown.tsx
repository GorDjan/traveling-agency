import { NavigationLink } from "../../utils/contentTypes";

interface DesktopDropdownProps {
  links?: NavigationLink[];
}

export default function DesktopDropdown({ links }: DesktopDropdownProps) {
  return (
    <ul
      className="invisible absolute left-0 top-full z-10 mt-2 min-w-full rounded-2xl bg-white p-4 pr-16 pt-8 shadow-lg transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-2 flex flex-col gap-y-7 transform"
    >
      {links?.map((link) => (
        <li
          key={link.id}
          className="flex cursor-pointer items-center font-medium transition-all duration-200"
        >
          <a
            href={link.href}
            className="text-gray-600 whitespace-nowrap hover:text-black"
          >
            {link.text}
          </a>

          
          
        </li>
      ))}
    </ul>
  );
}
