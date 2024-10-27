import { Camera } from "lucide-react";
import { ImageUploadButton } from "../atoms/ImageUploadButton";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";

type ProfileEditHeaderProps = {
  headerUrl: string;
  defaultHeaderUrl: string;
  onFileChange: (file: File) => void;
  register: any;
};

export const ProfileEditHeader: React.FC<ProfileEditHeaderProps> = ({
  headerUrl,
  defaultHeaderUrl,
  onFileChange,
  register,
}) => {
  return (
    <div className="relative">
      <img
        src={headerUrl || defaultHeaderUrl}
        className="w-full max-h-[200px] object-cover px-1"
      />
      <FormField
        name="header"
        render={() => (
          <FormItem className="space-y-0">
            <FormControl>
              <ImageUploadButton
                register={register}
                onFileChange={onFileChange}
                className="bg-gray-800/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <Camera className="size-6" />
              </ImageUploadButton>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
