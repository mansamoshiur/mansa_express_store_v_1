import { Product } from "@/types";
import { Rating } from "@mui/material";
import Image from "next/image";
import React from "react";
import Currency from "./currency";

interface ProductCardProps {
  data: Product;
}
const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image & actions */}
      <div className="relative aspect-square bg-gray-100 rounded-xl">
        <Image
          alt=""
          src={data.images[0].url}
          fill
          className="aspect-square object-cover rounded-md"
        />
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Review */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
        <Rating name="read-only" readOnly />
      </div>
    </div>
  );
};

export default ProductCard;
