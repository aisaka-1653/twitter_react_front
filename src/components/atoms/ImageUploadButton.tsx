import { FC, useRef } from "react";
import { Image } from "lucide-react";
import { Button } from "../ui/button";
import { UseFormRegister } from "react-hook-form";

type ImageUploadButtonProps = {
  register: UseFormRegister<any>;
  onFileChange: (file: File) => void;
};

export const ImageUploadButton: FC<ImageUploadButtonProps> = ({
  register,
  onFileChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileChange(file);
    }
  };

  return (
    <>
      <input
        type="file"
        {...register("image")}
        ref={fileInputRef}
        className="hidden"
        accept="image/jpeg,image/png"
        onChange={handleFileChange}
      />
      <Button
        type="button"
        variant="circle"
        size="icon"
        className="text-blue-300"
        onClick={handleImageClick}
      >
        <Image className="h-4 w-4" />
      </Button>
    </>
  );
};
