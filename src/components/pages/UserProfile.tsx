import { useNavigate, useParams } from "react-router-dom";
import { useUserProfile } from "@/hooks/useUserProfile";
import { ProfileTop } from "../orgranisms/ProfileTop";
import { ProfileHeader } from "../molecules/ProfileHeader";
import { ProfileBio } from "../orgranisms/ProfileBio";
import { ProfileTweetCollection } from "../orgranisms/ProfileTweetCollection";
import { Loader2 } from "lucide-react";

export const UserProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { user, isLoading, isError } = useUserProfile(userId);

  const handleClick = () => {
    navigate(-1);
  };

  if (!user || isError) return <div>ユーザーの読み込みに失敗しました</div>;
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="size-6 animate-spin" />
      </div>
    );
  return (
    <div className="w-[598px] border-x-[1px] border-slate-600">
      <ProfileHeader user={user} className="p-2" handleClick={handleClick} />
      <ProfileTop user={user} />
      <div className="px-4 my-4">
        <ProfileBio user={user} />
      </div>
      <div>
        <ProfileTweetCollection tweets={user.tweets} />
      </div>
    </div>
  );
};
