import { Camera } from "lucide-react";
import { ImageUploadButton } from "../atoms/ImageUploadButton";
import { Avatar, AvatarImage } from "../ui/avatar";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";

type ProfileAvatarProps = {
  avatarUrl: string;
  defaultAvatarUrl: string;
  onFileChange: (file: File) => void;
  register: any;
};

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  avatarUrl,
  defaultAvatarUrl,
  onFileChange,
  register,
}) => {
  return (
    <div className="relative flex items-center justify-center w-[25%] min-w-12 aspect-square mt-[-15%]">
      <div className="rounded-full w-[calc(100%_+_4px)] h-full">
        <div className="absolute size-full">
          <div className="absolute top-[2px] left-[2px] size-[calc(100%_-_4px)]">
            <div className="size-full rounded-full bg-black"></div>
          </div>
        </div>
        <div className="absolute size-full">
          <Avatar className="absolute top-[6px] left-[6px] size-[calc(100%_-_12px)]">
            <AvatarImage
              src={avatarUrl || defaultAvatarUrl}
              className="object-cover"
            />
          </Avatar>
        </div>
        <FormField
          name="avatar"
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
    </div>
  );
};
