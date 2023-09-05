import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface LinkItem {
  name: string;
  path: string;
  icon: IconType;
  count?: number;
}

interface DashboardMenuProps {
  links: LinkItem[];
}

const DashboardMenu = ({ links }: DashboardMenuProps) => {
  // use path name
  const pathName = usePathname();

  return (
    <div className="px-0">
      <ul className="space-y-4">
        {links.map(({ name, count, icon: Icon, path }, index) => {
          const isActive = pathName == path;

          return (
            <li
              key={index}
              className={`${
                isActive
                  ? "text-multi-secondary bg-multi-icon-bg p-1 rounded-lg font-bold "
                  : ""
              }`}
            >
              <Link href={path} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* <Image src={item.icon} alt="link icon" /> */}
                  <Icon
                    size={25}
                    className={`${
                      isActive
                        ? "text-multi-secondary"
                        : "text-multi-paragraph dark:text-white"
                    } p-1`}
                  />
                  <span className="text-sm">{name}</span>
                </div>
                {count && (
                  <div className="badge  text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]">
                    {count}
                  </div>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashboardMenu;
