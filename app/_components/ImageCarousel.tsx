"use client";

import Image from "next/image";
import { useState } from "react";

const ImageCarousel = ({ imagesArray }: { imagesArray: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <Image
        src={imagesArray[selectedImage]}
        alt="alt orfan"
        width={1000}
        height={1000}
        className="w-full rounded-lg shadow-lg mb-2 h-[500px] object-cover"
      />
      <div className="gap-2 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9">
        {imagesArray.map((image, idx) => (
          <Image
            key={idx}
            onClick={() => setSelectedImage(idx)}
            src={image}
            alt="orfan"
            width={2000}
            height={2000}
            className={`object-cover w-[100px] h-[100px] rounded-lg shadow-lg ${
              selectedImage === idx && "border-4 border-blue-500"
            } active:scale-110`}
          />
        ))}
      </div>
    </>
  );
};

export default ImageCarousel;
