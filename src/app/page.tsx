"use client";

import { useState } from "react";
import Header from "./components/Header";
import ImageList from "./components/ImageList";
import { IImage } from "./types";
import ImageDetails from "./components/ImageDetails";
import ImageUploads from "./components/ImageUploads";

export default function Home() {
  const [isDetailsOpened, setIsDetailsOpened] = useState(false);
  const [isUploadOpened, setIsUploadOpened] = useState(false);

  const [selectedImage, setSelectedImage] = useState<IImage | null>(null);

  return (
    <div>
      <Header setIsUploadOpened={setIsUploadOpened} />
      <ImageList
        setIsDetailsOpened={setIsDetailsOpened}
        setSelectedImage={setSelectedImage}
      />
      <ImageDetails
        isDetailsOpened={isDetailsOpened}
        selectedImage={selectedImage}
        onClose={() => setIsDetailsOpened(false)}
      />
      <ImageUploads
        isUploadOpened={isUploadOpened}
        onClose={() => setIsUploadOpened(false)}
      />
    </div>
  );
}
