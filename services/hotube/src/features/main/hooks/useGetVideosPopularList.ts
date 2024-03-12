// useSuspenseInfiniteQuery
"useclient";
import {
  InfiniteData,
  UseSuspenseInfiniteQueryResult,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import {
  GetVideoPopularListRequestParams,
  GetVideoPopularListResponse,
  getVideosPopularList,
  getVideosPopularListPath,
} from "@/features/main/api/getVideosPopularList";

type Params = Pick<GetVideoPopularListRequestParams, "maxResults"> & {
  initPageToken?: string; // 명시적으로 가져오기 위함
};

export const useGetVideosPopularList = ({
  maxResults,
  initPageToken,
}: Params): UseSuspenseInfiniteQueryResult<
  InfiniteData<GetVideoPopularListResponse, Error>
> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["videos", getVideosPopularListPath, maxResults, initPageToken],
    queryFn: async ({ pageParam = initPageToken }) => {
      return await getVideosPopularList({ maxResults, pageToken: pageParam });
    },
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
    getPreviousPageParam: (firstPage) => firstPage.prevPageToken,
  });
};
