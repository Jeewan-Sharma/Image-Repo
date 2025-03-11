"use client";
import React from "react";
import { useImageContext } from "../contexts/ImageDetailsContext";
import Image from "next/image";

const ImageDetails = () => {
  const { selectedImage, isPopupOpen, setIsPopupOpen } = useImageContext();

  // If the modal is not open, don't render anything
  if (!isPopupOpen) return null;

  return (
    // <>
    //   {/* Modal backdrop with transition */}
    //   <div
    //     className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out"
    //     style={{
    //       opacity: isPopupOpen ? 1 : 0, // Fade in/out effect
    //       pointerEvents: isPopupOpen ? "auto" : "none", // Enable/disable interactions
    //     }}
    //   >
    //     {/* Modal content with fixed size and transition */}
    //     <div
    //       className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
    //       style={{
    //         width: "70%", // 70% of the width
    //         height: "70%", // 70% of the height
    //         maxWidth: "800px", // Optional: Limit maximum width
    //         maxHeight: "600px", // Optional: Limit maximum height
    //         transform: isPopupOpen ? "scale(1)" : "scale(0.9)", // Scale effect
    //         opacity: isPopupOpen ? 1 : 0, // Fade in/out effect
    //       }}
    //     >
    //       <div className="flex justify-between items-center mb-4">
    //         <h2 className="text-xl font-bold mb-4">Image Details</h2>
    //         <button
    //           onClick={() => setIsPopupOpen(false)}
    //           className="bg-red-500 text-white px-4 py-2 rounded"
    //         >
    //           Close Modal
    //         </button>
    //       </div>
    //       {selectedImage && (
    //         <div className="grid grid-cols-2 gap-2 items-center">
    //           <div>
    //             <img
    //               src={selectedImage.src}
    //               alt={selectedImage.alt}
    //               className="mb-4 w-full h-auto max-h-[60%] object-contain" // Ensure image fits inside modal
    //             />
    //           </div>
    //           <div>
    //             <p className="mb-2">
    //               <strong>Name:</strong> {selectedImage.name}
    //             </p>
    //             <p className="mb-2">
    //               <strong>Alt Text:</strong> {selectedImage.alt}
    //             </p>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </>
    <>
      {/* Modal backdrop with transition */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out"
        style={{
          opacity: isPopupOpen ? 1 : 0, // Fade in/out effect
          pointerEvents: isPopupOpen ? "auto" : "none", // Enable/disable interactions
        }}
      >
        {/* Modal content with fixed size and transition */}
        <div
          className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out flex flex-col"
          style={{
            width: "70%", // 70% of the width
            height: "70%", // 70% of the height
            maxWidth: "800px", // Optional: Limit maximum width
            maxHeight: "600px", // Optional: Limit maximum height
            transform: isPopupOpen ? "scale(1)" : "scale(0.9)", // Scale effect
            opacity: isPopupOpen ? 1 : 0, // Fade in/out effect
          }}
        >
          {/* Modal header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Image Details</h2>
            <button
              onClick={() => setIsPopupOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Close Modal
            </button>
          </div>

          {/* Modal body */}
          {selectedImage && (
            <div className="grid grid-cols-2 gap-4 flex-grow overflow-hidden">
              {/* Image container */}
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill // Fill the container
                  style={{ objectFit: "contain" }} // Ensure the image fits inside the container
                  className="rounded-lg"
                />
              </div>

              {/* Details container */}
              <div className="flex flex-col justify-center">
                <p className="mb-2">
                  <strong>Name:</strong> {selectedImage.name}
                </p>
                <p className="mb-2">
                  <strong>Alt Text:</strong> {selectedImage.alt}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageDetails;
