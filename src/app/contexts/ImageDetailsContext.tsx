"use client";
import React, { createContext, useState, useContext, useMemo } from "react";

// Define the type for the context value
type ImageContextType = {
  selectedImage: { id: number; src: string; alt: string; name: string } | null;
  setSelectedImage: (
    image: { id: number; src: string; alt: string; name: string } | null
  ) => void;
  isPopupOpen: boolean;
  setIsPopupOpen: (isOpen: boolean) => void;
};

// Create a context with a default value
const ImageContext = createContext<ImageContextType>({
  selectedImage: null,
  setSelectedImage: () => {},
  isPopupOpen: false,
  setIsPopupOpen: () => {},
});

// Provider component to wrap the app or relevant parts
export const ImageProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    src: string;
    alt: string;
    name: string;
  } | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  console.log("ImageProvider rendered, isPopupOpen:", isPopupOpen);

  const value = useMemo(
    () => ({ selectedImage, setSelectedImage, isPopupOpen, setIsPopupOpen }),
    [selectedImage, isPopupOpen]
  );

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};

// Custom hook to use the context
export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};
