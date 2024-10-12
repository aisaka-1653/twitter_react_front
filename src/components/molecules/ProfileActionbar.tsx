import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";

type ProfileActionbarProps = {
  className?: string;
};

export const ProfileActionbar: React.FC<ProfileActionbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={twMerge("flex items-start gap-2", className)}>
      <Button
        variant="circle"
        size="icon"
        className="border-[1px] border-slate-600"
      >
        <Mail className="w-5 h-5" />
      </Button>
      <Button
        variant="inverse"
        size="md"
        className="text-[15px] font-bold rounded-full h-9"
      >
        フォロー
      </Button>
    </div>
  );
};
