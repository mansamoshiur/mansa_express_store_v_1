"use client";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { MouseEventHandler, CSSProperties, MouseEvent } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Product } from "@/types";
import ProductSlidCard from "./product-slid-card";

interface ArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  style?: CSSProperties;
  className?: string;
}
interface ProductSliderProps {
  data: Product[];
}

const SampleNextArrow = (props: ArrowProps): JSX.Element => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "#FFFFFF",
        fontSize: "20px",
      }}
      onClick={onClick}
    >
      <button className="bg-[#0F3460] p-2 rounded-full relative z-20">
        <FaArrowRight />
      </button>
    </div>
  );
};

const SamplePrevArrow = (props: ArrowProps): JSX.Element => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "#FFFFFF",
        fontSize: "20px",
      }}
      onClick={onClick}
    >
      <button className="bg-[#0F3460] p-2 rounded-full relative z-20">
        <FaArrowLeft />
      </button>
    </div>
  );
};

const ProductSlider = ({ data }: ProductSliderProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <SampleNextArrow onClick={function (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void {
      throw new Error("Function not implemented.");
    } } /> as React.ReactElement,
    prevArrow: <SamplePrevArrow onClick={function (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void {
      throw new Error("Function not implemented.");
    } } />,
  };

  return (
    <div style={{ margin: "30px", alignItems: "center" }} className="carousel">
      <Slider {...settings}>
        {data.map((item) => (
          <ProductSlidCard key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
