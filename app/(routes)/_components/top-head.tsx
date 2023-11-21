/* eslint-disable react/no-unescaped-entities */
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Container from "../../../components/ui/container";

const TopHead = () => {
  return (
    <section className="hidden mdl:block bg-[#0f3460] text-white py-3">
      <Container>
        <div className="flex items-center justify-between px-6">
          <div className="flex items-center gap-x-4">
            <div className="flex gap-x-2">
              <FaPhoneAlt />
              <span>+88012 3457 7894</span>
            </div>
            <div className="flex items-center gap-x-2">
              <FaEnvelope />
              <span>example@gamil.com</span>
            </div>
          </div>
          <div className="flex gap-x-4">
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <div className="flex gap-x-1 items-center">
              <label>EN</label>
              <span>
                <IoIosArrowDown />
              </span>
            </div>
            <div className="flex gap-x-1 items-center">
              <label>USD</label>
              <span>
                <IoIosArrowDown />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TopHead;
