"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Icons from "./Icons";
import { useImageContext } from "../contexts/ImageDetailsContext";
import { IImage } from "@/app/types/index";

const Images: IImage[] = [
  {
    id: 1,
    alt: "Jeewan Sharma",
    name: "Jeewan Sharma is a good boy",
    src: "/assets/1.jpg",
  },
  {
    id: 2,
    alt: "Jeewan Sharma",
    name: "Jeewan Sharma is a good boy",
    src: "/assets/2.jpg",
  },
  {
    id: 3,
    alt: "Jeewan Sharma",
    name: "Jeewan Sharma is a good boy",
    src: "/assets/1.jpg",
  },
  {
    id: 4,
    alt: "Jeewan Sharma",
    name: "Jeewan Sharma is a good boy",
    src: "/assets/1.jpg",
  },
  {
    id: 5,
    alt: "Jeewan Sharma",
    name: "Jeewan Sharma is a good boy",
    src: "/assets/1.jpg",
  },
  {
    id: 6,
    alt: "Jeewan Sharma",
    name: "Jeewan Sharma is a good boy",
    src: "/assets/1.jpg",
  },
  {
    id: 7,
    alt: "Jeewan Sharma",
    name: "Jeewan Sharma is a good boy",
    src: "/assets/1.jpg",
  },
];

const ImageList = () => {
  const { setSelectedImage, setIsPopupOpen, isPopupOpen } = useImageContext();
  useEffect(() => {
    console.log("isPopupOpen updated:", isPopupOpen);
  }, [isPopupOpen]);

  const handleImageClick = (image: IImage) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
    console.log("Image Clicked", isPopupOpen);
  };

  return (
    <div className="wrapper mt-6">
      <div className="grid grid-cols-6 gap-4">
        {Images.map((image: IImage) => (
          <div
            key={image.id}
            onClick={() => handleImageClick(image)}
            className="flex flex-col border-2 border-gray-200 hover:border-primary-color rounded-lg p-1 transition"
          >
            {/* Image Container */}
            <div className="h-50 w-full relative rounded-lg ">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>

            <div className="flex items-center justify-around p-1">
              <p className="text-gray-600 truncate">{image.name}</p>
              <button className="border-2 border-gray-200 p-1 rounded-lg text-gray-600 cursor-pointer hover:border-gray-400 transition">
                {Icons.copy}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
