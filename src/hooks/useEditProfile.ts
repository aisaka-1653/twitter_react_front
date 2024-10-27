import { useState } from "react";
import { toast } from "sonner";
import { ProfileEditFormProps } from "@/utils/schema/profileEditFormSchema";
import { editProfile as editProfileAPI } from "@/apis/users";

type EditProfileReturn = [
  (profile: ProfileEditFormProps) => Promise<void>,
  boolean,
];

export const useEditProfile = (): EditProfileReturn => {
  const [isLoading, setIsLoading] = useState(false);

  const createFormData = (profile: ProfileEditFormProps) => {
    const formData = new FormData();

    formData.append("user[display_name]", profile.display_name);

    const textFields = {
      bio: profile.bio,
      location: profile.location,
      website: profile.website,
    };
    Object.entries(textFields).forEach(([key, value]) => {
      formData.append(`user[${key}]`, value ?? "");
    });

    const fileFields = { avatar: profile.avatar, header: profile.header };
    Object.entries(fileFields).forEach(([key, value]) => {
      if (value) formData.append(`user[${key}]`, value);
    });

    return formData;
  };

  const editProfile = async (profile: ProfileEditFormProps) => {
    if (!profile.display_name) return;

    setIsLoading(true);
    try {
      const formData = createFormData(profile);
      await editProfileAPI(formData);
      toast.success("プロフィールを更新しました");
    } catch (error) {
      toast.error("プロフィールの更新に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  return [editProfile, isLoading];
};
