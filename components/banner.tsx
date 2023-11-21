"use client";
import Image from "next/image";
import { Key, SetStateAction, useState } from "react";
import Slider from "react-slick";
import "./product-slider/slick.css"
import "./product-slider/slick-theme.css"
import SliderData from "../app/(routes)/_components/slider-data";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    beforeChange: (prev: any, next: SetStateAction<number>) => {
      setDotActive(next);
    },
    appendDots: (dots: string) => (
      <div
        style={{
          position: "absolute",
          top: "85%",
          left: "0",
          right: "0",
          margin: "0 auto",
          transform: "translate(-50% -50%)",
          width: "210px",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#e94560",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px solid #e94560",
              }
            : {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#232F3E",
                color: "white",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px solid white",
              }
        }
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <>
      <Slider {...settings}>
        {SliderData.map(
          (
            value: { title: string; desc: string; cover: string },
            index: Key
          ) => {
            return (
              <>
                <div
                  className="flex items-center justify-between xl:px-40 xl:py-20 px-4"
                  key={index}
                >
                  <div>
                    <h1 className="xl:text-5xl mdl:text-2xl xl:leading-[55px] lgl:mr-80 font-extrabold">
                      {value.title}
                    </h1>
                    <p className="md:my-5 md:text-base xl:mr-80 mt-4 mb-20 text-base">
                      {value.desc}
                    </p>
                    <button
                      onClick={() => router.push("/shop")}
                      className="bg-[#e94560] hidden md:block text-white px-6 py-3 font-semibold rounded-md"
                    >
                      Visit Collections
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      width={300}
                      height={400}
                      src={value.cover}
                      className="h-[400px] w-[400px] object-contain object-center"
                      alt=""
                    />
                  </div>
                </div>
              </>
            );
          }
        )}
      </Slider>
    </>
  );
};

export default Banner;
