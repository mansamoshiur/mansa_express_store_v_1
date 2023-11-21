"use client";
import React from "react";
import { Product } from "@/types";
import Image from "next/image";
import Currency from "../ui/currency";
import { Rating } from "@mui/material";

interface ProductCardProps {
  item: Product;
}
const ProductSlidCard = ({ item }: ProductCardProps) => {
  return (
    <div className="max-w-[300px] ml-8 bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="relative aspect-square bg-gray-100 rounded-xl">
        <Image
          alt=""
          src={item.images[0].url}
          fill
          className="aspect-square object-cover rounded-md"
        />
      </div>
        {/* Description */}
      <div>
        <p className="font-semibold text-lg">{item.name}</p>
        <p className="text-sm text-gray-500">{item.category?.name}</p>
      </div>
      {/* Price & Review */}
      <div className="flex items-center justify-between">
        <Currency value={item?.price} />
        <Rating name="read-only" readOnly />
      </div>
    </div>
  );
};

export default ProductSlidCard;
