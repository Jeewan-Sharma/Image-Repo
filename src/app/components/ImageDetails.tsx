"use client";
import React from "react";
import { useImageContext } from "../contexts/ImageDetailsContext";

const ImageDetails = () => {
  const { selectedImage, isPopupOpen, setIsPopupOpen } = useImageContext();

  // If the modal is not open, don't render anything
  if (!isPopupOpen) return null;

  return (
    <>
      {/* Modal backdrop */}
      <div className="fixed inset-0 bg-gray-100 bg-opacity-20 flex items-center justify-center">
        {/* Modal content */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-bold mb-4">Image Details</h2>
          {selectedImage && (
            <>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="mb-4"
              />
              <p className="mb-2">
                <strong>Name:</strong> {selectedImage.name}
              </p>
              <p className="mb-2">
                <strong>Alt Text:</strong> {selectedImage.alt}
              </p>
            </>
          )}
          <button
            onClick={() => setIsPopupOpen(false)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Close Modal
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageDetails;
