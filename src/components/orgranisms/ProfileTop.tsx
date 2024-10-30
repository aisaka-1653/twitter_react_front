import { UserProfile } from "@/types/user";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useCurrentUser } from "@/hooks/uesCurrentUser";
import { ProfileActionbar } from "../molecules/ProfileActionbar";
import { ProfileEditForm } from "./form/ProfileEditForm";

type ProfileHeaderProps = {
  user: UserProfile;
};

export const ProfileTop: React.FC<ProfileHeaderProps> = ({ user }) => {
  const { id, avatar_url, header_url } = user;
  const { currentUser } = useCurrentUser();

  return (
    <div>
      <img src={header_url} className="w-full h-[200px] object-cover" />
      <div className="flex justify-between items-center px-4 pt-3">
        <div className="relative flex items-center justify-center w-[25%] min-w-12 aspect-square mt-[-15%]">
          <div className="rounded-full w-[calc(100%_+_4px)] h-full">
            <div className="absolute size-full">
              <div className="absolute top-[2px] left-[2px] size-[calc(100%_-_4px)]">
                <div className="size-full rounded-full bg-black"></div>
              </div>
            </div>
            <div className="absolute size-full">
              <Avatar className="absolute top-[6px] left-[6px] size-[calc(100%_-_12px)]">
                <AvatarImage src={avatar_url} className="object-cover" />
              </Avatar>
            </div>
          </div>
        </div>
        {currentUser?.id === id ? (
          <ProfileEditForm user={user} />
        ) : (
          <ProfileActionbar />
        )}
      </div>
    </div>
  );
};
