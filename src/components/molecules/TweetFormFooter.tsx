import { useFormContext } from "react-hook-form";
import { TweetButton } from "../atoms/TweetButton";
import { ImageUploadButton } from "../atoms/ImageUploadButton";

export const TweetFormFooter = () => {
  const { register, setValue, formState } = useFormContext();

  const handleFileChange = (file: File) => {
    setValue("image", file, { shouldValidate: true });
  };

  return (
    <div className="flex justify-between items-center">
      <ImageUploadButton register={register} onFileChange={handleFileChange} />
      <div className="h-9">
        <TweetButton isDisabled={!formState.isValid} />
      </div>
    </div>
  );
};
