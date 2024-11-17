export type InteractionType = "retweet" | "like" | "bookmark";

type InteractionConfig = {
  endpoint: string;
  messages: {
    success: {
      create: string;
      destroy: string;
    };
    error: {
      create: string;
      destroy: string;
    };
  };
};

export const INTERACTION_CONFIGS: Record<InteractionType, InteractionConfig> = {
  retweet: {
    endpoint: "retweets",
    messages: {
      success: {
        create: "リツイートしました",
        destroy: "リツイートを解除しました",
      },
      error: {
        create: "リツイートに失敗しました",
        destroy: "リツイートの解除に失敗しました",
      },
    },
  },
  like: {
    endpoint: "likes",
    messages: {
      success: {
        create: "いいねしました",
        destroy: "いいねを解除しました",
      },
      error: {
        create: "いいねに失敗しました",
        destroy: "いいねの解除に失敗しました",
      },
    },
  },
  bookmark: {
    endpoint: "bookmarks",
    messages: {
      success: {
        create: "ブックマークに追加しました",
        destroy: "ブックマークを解除しました",
      },
      error: {
        create: "ブックマークの追加に失敗しました",
        destroy: "ブックマークの解除に失敗しました",
      },
    },
  },
};
