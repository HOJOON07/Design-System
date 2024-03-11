import { GetVideoPopularListRequestParams } from "@/features/main/api/getVideosPopularList";
import { youtubeServerInstance } from "@/shared/api/youtube/server/instance";
import { NextRequest } from "next/server";

const parseQueryParams = (
  params: URLSearchParams,
): GetVideoPopularListRequestParams => {
  return {
    maxResults: Number(params.get("maxResults") ?? "10"),
    pageToken: params.get("pageToken") ?? undefined,
  };
};

export const GET = async (request: NextRequest) => {
  try {
    const queryParams = parseQueryParams(request.nextUrl.searchParams);
    const { data } = await youtubeServerInstance.videos.list({
      part: ["snippet", "statistics"],
      chart: "mostPopular",
      regionCode: "KR",
      ...queryParams,
    });

    console.log(request);
    return Response.json({
      data,
    });
  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
      }),
      {
        status: 500,
      },
    );
  }
};
