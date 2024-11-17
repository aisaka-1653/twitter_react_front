import { userFollow, userUnfollow } from "@/apis/users";
import { useState } from "react";
import { toast } from "sonner";

export const useFollowActions = (userId: string, following: boolean) => {
  const [isFollow, setIsFollow] = useState(following);
  const handleFollowClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await userFollow(userId);
      toast.success("フォローしました");
      setIsFollow(true);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const handleUnfollowClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await userUnfollow(userId);
      toast.success("フォローを解除しました");
      setIsFollow(false);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return {
    isFollow,
    handleFollowClick,
    handleUnfollowClick,
  };
};
