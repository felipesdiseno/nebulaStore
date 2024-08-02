"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataTestimony from "../../../public/dataTestimony";

export default function OpinionComponent() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-2/4  mt-2 m-4 ">
      <Slider {...settings} className="space-x-6">
        {dataTestimony.map((d) => (
          <div key={d.id} className="bg-none text-black rounded-lg p-2">
            <div className="rounded-t-xl bg-blue-500 flex justify-center items-center pt-2 pb-2 ">
              <img src={d.img} alt="" className="w-44 h-44 rounded-full" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4 bg-gray-300 rounded-b-xl">
              <h3 className="text-2xl font-semibold">{d.name}</h3>
              <p className="">{d.testimony}</p>
              <button className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-700">
                Leer más
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
