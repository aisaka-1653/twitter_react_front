import { UserProfile } from "@/types/user";
import { Link, MapPin } from "lucide-react";

type ProfileBioProps = {
  user: UserProfile;
};

export const ProfileBio: React.FC<ProfileBioProps> = ({ user }) => {
  const { display_name, username, bio, location, website } = user;

  return (
    <div>
      <p className="text-xl font-bold">{display_name}</p>
      <p className="text-[15px] text-muted-foreground">{`@${username}`}</p>
      {bio && (
        <p className="whitespace-pre text-wrap break-words mt-3">{bio}</p>
      )}
      <div className="flex gap-4 text-muted-foreground mt-3">
        {location ? (
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        ) : null}
        {website ? (
          <div className="flex items-center gap-1">
            <Link className="h-4 w-4" />
            <a
              target="_blank"
              href={website}
              className="text-blue-400 hover:underline"
            >
              {website}
            </a>
          </div>
        ) : null}
      </div>
      <div className="flex gap-6 text-muted-foreground mt-4">
        {/* TODO フォロー･フォロワー数を表示する */}
        <div className="flex gap-1">
          <span className="text-white font-bold">{`100`}</span>
          <span>フォロー中</span>
        </div>
        <div className="flex gap-1">
          <span className="text-white font-bold">{`100`}</span>
          <span>フォロワー</span>
        </div>
      </div>
    </div>
  );
};
