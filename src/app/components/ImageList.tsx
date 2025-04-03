"use client";

import Image from "next/image";
import Icons from "./Icons";
import { IImage } from "@/app/types/index";
import { useState } from "react";

import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const Images: IImage[] = [
  {
    id: 1,
    alt: "Jeewan Sharma",
    name: "Jeewan Sharma is a good boy Jeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boyJeewan Sharma is a good boy",
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<IImage | null>(null);

  const handleImageClick = (image: IImage) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  return (
    <div className="wrapper my-6">
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

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xl rounded-xl bg-white p-4 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-gray-700"
              >
                <div className="flex justify-between items-center">
                  <p>Image Details</p>
                  <div
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 cursor-pointer"
                  >
                    {Icons.cross}
                  </div>
                </div>
              </DialogTitle>
              {selectedImage && (
                <div>
                  <div className="grid grid-cols-2 gap-4 items-start">
                    {/* Image container */}
                    <div className="relative w-full h-[50vh]">
                      <Image
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        fill // Fill the container
                        style={{ objectFit: "contain" }}
                        className="rounded-lg"
                      />
                    </div>

                    {/* Details container */}
                    <div className="flex flex-col max-h-[50vh] overflow-y-auto">
                      <p className="mb-2">
                        <strong>Name:</strong> {selectedImage.name}
                      </p>
                      <p className="mb-2">
                        <strong>Alt Text:</strong> {selectedImage.alt}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-end gap-3">
                    <Button className="inline-flex items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 cursor-pointer hover:bg-red-700 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white">
                      Delete
                      {Icons.delete}
                    </Button>
                    <Button className="inline-flex items-center gap-2 rounded-md bg-primary-color py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 cursor-pointer hover:bg-secondary-color focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white">
                      Get URL
                      {Icons.copy}
                    </Button>
                  </div>
                </div>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ImageList;
