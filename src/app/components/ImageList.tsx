import Image from "next/image";
import React from "react";
import Icons from "./Icons";

const Images = [
  {
    id: 1,
    name: "Jeewan Sharma is a good boy",
    url: "/assets/1.jpg",
  },
  {
    id: 2,
    name: "Jeewan Sharma is a good boy",
    url: "/assets/2.jpg",
  },
  {
    id: 3,
    name: "Jeewan Sharma is a good boy",
    url: "/assets/1.jpg",
  },
  {
    id: 4,
    name: "Jeewan Sharma is a good boy",
    url: "/assets/1.jpg",
  },
  {
    id: 5,
    name: "Jeewan Sharma is a good boy",
    url: "/assets/1.jpg",
  },
  {
    id: 6,
    name: "Jeewan Sharma is a good boy",
    url: "/assets/1.jpg",
  },
  {
    id: 7,
    name: "Jeewan Sharma is a good boy",
    url: "/assets/1.jpg",
  },
];

const ImageList = () => {
  return (
    <div className="wrapper mt-6">
      <div className="grid grid-cols-6 gap-4">
        {Images.map((image) => (
          <div
            key={image.id}
            className="flex flex-col border-2 border-gray-200 hover:border-primary-color rounded-lg p-1"
          >
            {/* Image Container */}
            <div className="h-50 w-full relative rounded-lg ">
              <Image
                src={image.url}
                alt="image"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>

            {/* Delete Button */}
            <div className="flex items-center justify-around p-1">
              <p className="text-gray-600 truncate">{image.name}</p>
              <button className="border-2 border-gray-200 p-1 rounded-lg text-gray-600 cursor-pointer">
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
