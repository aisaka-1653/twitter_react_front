import { FC, ReactNode, useRef } from "react";
import { Button } from "../ui/button";
import { UseFormRegister } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type ImageUploadButtonProps = {
  register: UseFormRegister<any>;
  onFileChange: (file: File) => void;
  className?: string;
  children: ReactNode;
};

export const ImageUploadButton: FC<ImageUploadButtonProps> = ({
  register,
  onFileChange,
  className,
  children,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) onFileChange(file);
    if (!fileInputRef.current) return;
    fileInputRef.current.value = "";
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
        className={twMerge("", className)}
        onClick={handleImageClick}
      >
        {children}
      </Button>
    </>
  );
};
