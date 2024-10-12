import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { UserProfile } from "@/types/user";
import { twMerge } from "tailwind-merge";

type ProfileHeaderProps = {
  user: UserProfile;
  className?: string;
  handleClick: () => void;
};

export const ProfileHeader: React.FC<ProfileHeaderProps> = (props) => {
  const {
    user: { display_name, tweets },
    className,
    handleClick,
  } = props;

  return (
    <div className={twMerge("flex items-center gap-4", className)}>
      <Button variant="circle" onClick={handleClick}>
        <ArrowLeft className="h-5 w-5" />
      </Button>
      <div>
        <h2 className="text-xl font-bold">{display_name}</h2>
        <p className="text-[13px] text-muted-foreground">{`${tweets.length}件のツイート`}</p>
      </div>
    </div>
  );
};
