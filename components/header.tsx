import TopHead from "./top-head";
import MiddleHead from "./middle-head";
import Navbar from "./navbar";

const Header = () => {
  return (
    <div>
      <TopHead />
      <MiddleHead />
      <hr />
      <Navbar />
    </div>
  );
};

export default Header;
