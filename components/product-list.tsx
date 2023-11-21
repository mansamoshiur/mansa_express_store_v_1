import { FaBolt } from "react-icons/fa6";
import { Product } from "@/types";
import Container from "./ui/container";
import ProductSlider from "./product-slider/product-slider";

interface ProductListProps {
  title: string;
  items: Product[];
}
const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <Container>
      <div className="space-y-4">
        <div className="flex items-center gap-x-2">
          <FaBolt size={25} className="text-[#e94560]" />
          <h3 className="font-bold text-3xl">{title}</h3>
        </div>
        <ProductSlider data={items} />
      </div>
    </Container>
  );
};

export default ProductList;
