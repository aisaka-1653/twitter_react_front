import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserProfile } from "@/types/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProfileEditFormProps,
  profileEditFormSchema,
} from "@/utils/schema/profileEditFormSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { CustomFormField } from "../../molecules/CustomFormField";
import { AutoResizeTextArea } from "../../atoms/AutoResizeTextArea";
import { useImageUrl } from "@/hooks/useImageUrl";
import { useEditProfile } from "../../../hooks/useEditProfile";
import { ProfileEditHeader } from "../../molecules/ProfileEditHeader";
import { ProfileAvatar } from "../../molecules/ProfileEditAvatar";
import { useState } from "react";

type ProfileEditFormType = {
  user: UserProfile;
};

export const ProfileEditForm: React.FC<ProfileEditFormType> = ({ user }) => {
  const { display_name, bio, location, website, avatar_url, header_url } = user;
  const [open, setOpen] = useState(false);
  const {
    imageUrl: headerUrl,
    createImageUrl: createHeaderUrl,
    deleteImageUrl: deleteHeaderUrl,
  } = useImageUrl();
  const {
    imageUrl: avatarUrl,
    createImageUrl: createAvatarUrl,
    deleteImageUrl: deleteAvatarUrl,
  } = useImageUrl();
  const [editProfile] = useEditProfile();

  const onSubmit = (data: ProfileEditFormProps) => {
    editProfile(data);
    deleteHeaderUrl();
    deleteAvatarUrl();
    setOpen(false);
  };

  const handleFileChange = (
    fieldName: keyof Pick<ProfileEditFormProps, "header" | "avatar">,
    file: File,
    createUrl: (file: File) => void,
  ) => {
    setValue(fieldName, file, { shouldValidate: true });
    createUrl(file);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      deleteHeaderUrl();
      deleteAvatarUrl();
      reset();
    }
    setOpen(open);
  };

  const form = useForm<ProfileEditFormProps>({
    mode: "onChange",
    resolver: zodResolver(profileEditFormSchema),
    defaultValues: {
      display_name,
      bio: bio ?? "",
      location: location ?? "",
      website: website ?? "",
    },
  });

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isValid },
  } = form;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-[15px] font-bold rounded-full border-slate-600"
        >
          プロフィールを編集
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[600px] h-[650px] min-h[400px] rounded-2xl overflow-y-auto p-0">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <DialogHeader className="px-6 pt-6">
              <DialogTitle>プロフィールを編集</DialogTitle>
            </DialogHeader>
            <div>
              <ProfileEditHeader
                headerUrl={headerUrl}
                defaultHeaderUrl={header_url}
                onFileChange={(file) =>
                  handleFileChange("header", file, createHeaderUrl)
                }
                register={register}
              />
              <div className="flex justify-between items-center px-4 pt-3">
                <ProfileAvatar
                  avatarUrl={avatarUrl}
                  defaultAvatarUrl={avatar_url}
                  onFileChange={(file) =>
                    handleFileChange("avatar", file, createAvatarUrl)
                  }
                  register={register}
                />
              </div>
              <div className="flex flex-col gap-5 p-6">
                <CustomFormField
                  control={control}
                  name="display_name"
                  label="名前"
                />
                <FormField
                  control={control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>自己紹介</FormLabel>
                      <FormControl>
                        <AutoResizeTextArea variant="outline" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CustomFormField
                  control={control}
                  name="location"
                  label="場所"
                />
                <CustomFormField
                  control={control}
                  name="website"
                  label="ウェブサイト"
                />
              </div>
            </div>
            <DialogFooter className="px-6 pb-6 sm:justify-start">
              <Button
                type="submit"
                variant="inverse"
                className="w-full"
                disabled={!isValid}
              >
                保存
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
