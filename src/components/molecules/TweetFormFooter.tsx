import { useFormContext } from "react-hook-form";
import { TweetButton } from "../atoms/TweetButton";
import { ImageUploadButton } from "../atoms/ImageUploadButton";
import { Loader2 } from "lucide-react";

export const TweetFormFooter = ({ isLoading }: { isLoading: boolean }) => {
  const { register, setValue, formState } = useFormContext();

  const handleFileChange = (file: File) => {
    setValue("image", file, { shouldValidate: true });
  };

  return (
    <div className="flex justify-between items-center">
      <ImageUploadButton register={register} onFileChange={handleFileChange} />
      <div className="h-9">
        <TweetButton isDisabled={!formState.isValid || isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <span>Please Wait</span>
            </>
          ) : (
            "ツイートする"
          )}
        </TweetButton>
      </div>
    </div>
  );
};
