import { INTERACTION_CONFIGS, InteractionType } from "@/types/interaction";
import { toast } from "sonner";
import apiClient from "@/apis/apiClient";

export const useTweetInteraction = (
  id: string,
  type: InteractionType,
  isActive: boolean,
  mutate?: () => Promise<void>,
) => {
  const config = INTERACTION_CONFIGS[type];
  const endpoint = `/tweets/${id}/${config.endpoint}`;

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (isActive) {
        await apiClient.delete(endpoint);
        toast.success(config.messages.success.destroy);
      } else {
        await apiClient.post(endpoint);
        toast.success(config.messages.success.create);
      }
      await mutate?.();
    } catch {
      toast.error(
        isActive ? config.messages.error.destroy : config.messages.error.create,
      );
    }
  };

  return { handleClick };
};
