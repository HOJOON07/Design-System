import { youtube_v3 } from "googleapis";

export type GetVideoPopularListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>;

export type GetVideoPopularListResponse = {};
