import { MoreHorizontal, UserX } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { User } from "@/types/user";
import { FC } from "react";

type TweetMoreDropdownProps = {
  user: User;
};

export const TweetMoreDropdown: FC<TweetMoreDropdownProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-muted-foreground focus-visible:outline-none">
        <MoreHorizontal className="h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xl shadow-md shadow-white">
        <DropdownMenuItem className="px-4 py-3 hover:bg-accent hover:text-accent-foreground cursor-pointer">
          <Button variant="ghost" className="p-0 h-5">
            <UserX className="h-5 w-5 mr-3" />
            <span className="font-bold">
              {`@${user.username}さんをフォロー`}
            </span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
