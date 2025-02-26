// Resources page
export interface Resource {
  title: string;
  description: string;
  url: string;
  tags: Tag[];
  og_preview: string | undefined;
}

export interface Tag {
  name: string;
  color?: string;
}

// YouTube page
export interface YoutubeChannel {
  channelId: string;
  channelCustomName: string; // e.g. "@notjustbikes"
  channelName: string; // e.g. "Not Just Bikes"
  channelPic: string; // e.g. "https://yt3.ggpht.com/5DBP22k02WIMvHgeoUj_Tt14Kh8u-oaAhYHQu1gXCoHuisGXnavb5k-ivpyffqIARNDzgpBbUw"
  channelSubCount: number;
}

export interface YoutubeChannelFilterItem {
  channelId: string;
  active: boolean;
}

export interface YoutubeVideo {
  channelId: string;
  publishedAt: string;
  videoId: string;
  title: string;
}
