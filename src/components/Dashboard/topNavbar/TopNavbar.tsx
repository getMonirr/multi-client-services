import NotifyProfile from "@/components/shared/header/NotifyProfile";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const TopNavbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <div className="bg-white w-full p-2 fixed shadow-xl z-40 flex items-center justify-between">
      {/* show menu button */}
      <div>
        <button className="block sm:hidden" onClick={toggleSidebar}>
          <AiOutlineMenuUnfold size={25} className="text-gray-500" />
        </button>
        <input
          type="text"
          placeholder="Type to Search"
          className="input input-ghost w-full max-w-xs focus:outline-none hidden sm:block"
        />
      </div>
      <NotifyProfile className="sm:mr-[260px]" />
    </div>
  );
};

export default TopNavbar;
