import { useState } from "react";

export const useImageUrl = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const createImageUrl = (image: File) => {
    if (imageUrl) deleteImageUrl();
    setImageUrl(window.URL.createObjectURL(image));
  };

  const deleteImageUrl = () => {
    setImageUrl("");
    URL.revokeObjectURL(imageUrl);
  };

  return { imageUrl, createImageUrl, deleteImageUrl };
};
