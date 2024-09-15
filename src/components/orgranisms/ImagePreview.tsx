import { X } from "lucide-react";
import { Button } from "../ui/button";
import { FC } from "react";

type ImagePreviewProps = {
  imageUrl: string;
  deleteImageUrl: () => void;
};

export const ImagePreview: FC<ImagePreviewProps> = ({
  imageUrl,
  deleteImageUrl,
}) => {
  return (
    <div className="relative">
      <div className="p-0.5">
        <img
          src={imageUrl}
          className="w-full max-h-[685px] object-cover rounded-lg"
        />
      </div>
      <div className="absolute top-1.5 right-1.5 size-8">
        <Button
          type="button"
          variant="circle"
          size="icon"
          className="size-full bg-slate-900"
          onClick={deleteImageUrl}
        >
          <X className="size-5" />
        </Button>
      </div>
    </div>
  );
};
