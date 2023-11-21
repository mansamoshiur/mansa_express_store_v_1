import Link from "next/link";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import Container from "../../../components/ui/container";

const MiddleHead = () => {
  return (
    <Container>
      <div className="flex items-center justify-between py-4 px-4 md:px-6  mdl:gap-20">
        <div className="text-[#E94560] font-extrabold text-xl ">
          <Link href="/">MansaExpress Store</Link>
        </div>
        <div className="hidden mdl:flex items-center px-4 flex-grow rounded-full border bordr-[2px] border-neutral-400 p-2">
          <CiSearch className="w-6 h-6" />

          <input
            className="w-[100%] py-2 px-4 outline-none border-none"
            type="text"
            placeholder="Search and hit enter..."
          />
        </div>
        <div className="flex gap-6">
          <span className="p-2 md:p-4 bg-slate-200 rounded-full">
            <FaUser className="md:h-5 h-4 md:w-5 w-4" />
          </span>
          <span className="p-2 md:p-4 bg-slate-200 rounded-full">
            <FaShoppingBag className="md:h-5 h-4 md:w-5 w-4 relative" />
          </span>
          <span className="absolute bg-[#e94560] text-white ml-20 md:ml-28 text-sm md:text-base  -mt-3 md:-mt-2 px-1 md:px-2 rounded-full">
            9
          </span>
        </div>
      </div>
    </Container>
  );
};

export default MiddleHead;
