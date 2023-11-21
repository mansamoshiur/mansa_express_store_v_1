import TopHead from "./top-head";
import MiddleHead from "./middle-head";
import Navbar from "./navbar";
import getCategories from "@/actions/get-categories";

const Header = async () => {
  const categories = await getCategories();
  return (
    <div>
      <TopHead />
      <MiddleHead />
      <hr />
      <Navbar categories={categories} />
    </div>
  );
};

export default Header;
