import { API_BASE_URL } from "@/shared/api/constants";
import { VideoThumbnail } from "@/shared/api/youtube/types/item";
import { ListPageApiInfo } from "@/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type GetVideoPopularListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>;

export type PopularListItem = {
  videoId: string;
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  thumbnail: VideoThumbnail;
  publishedAt: string;
  publishedAtDisplayText: string; // 1개월전
  viewCount: number;
  viewCountDisplayText: string; // 23만회
};

export type GetVideoPopularListResponse = {
  lists: PopularListItem[];
} & ListPageApiInfo;

export const getVideosPopularListPath = "/api/videos/popular-list";

export const getVideosPopularList = async (
  params: GetVideoPopularListRequestParams,
): Promise<GetVideoPopularListResponse> => {
  const queryParams = queryString.stringify(params);

  const url = `${API_BASE_URL}${getVideosPopularListPath}?${queryParams}`;

  const response = await fetch(url);

  return await response.json();
};
