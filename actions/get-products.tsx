import { Product } from "@/types";



const getProducts = async ():Promise<Product[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  return res.json();
};

export default getProducts;
