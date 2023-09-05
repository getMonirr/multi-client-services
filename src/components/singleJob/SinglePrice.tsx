import { FaArrowRight, FaCheck, FaTimes } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { RiLoopRightFill } from "react-icons/ri";
import SimpleBtn from "../shared/btn/SimpleBtn";

const SinglePrice = ({ name }: { name: string }) => {
  return (
    <div className="px-2">
      <h3 className="flex items-center justify-between my-8 font-bold">
        {name} <span>$10</span>
      </h3>
      <p className="mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, error.
      </p>
      <div className="flex items-center gap-4 lg:gap-8 mb-3 font-bold flex-wrap">
        <p className="flex items-center gap-2">
          <BiTime /> <span>1 day delivery</span>
        </p>
        <p className="flex items-center gap-2">
          <RiLoopRightFill /> <span>Unlimited revision</span>
        </p>
      </div>
      <div>
        <p className="flex items-center gap-2">
          <FaCheck /> <span>1 day delivery</span>
        </p>
        <p className="flex items-center gap-2">
          <FaCheck /> <span>1 day delivery</span>
        </p>
        <p className="flex items-center gap-2">
          <FaCheck /> <span>1 day delivery</span>
        </p>
        <p className="flex items-center gap-2">
          <FaCheck /> <span>1 day delivery</span>
        </p>
      </div>
      <div className="my-8">
        <SimpleBtn className="w-full text-white">
          <p className="flex items-center justify-center gap-2 mx-auto">
            Continue
            <span>
              <FaArrowRight />
            </span>
          </p>
        </SimpleBtn>
      </div>
    </div>
  );
};

export default SinglePrice;
