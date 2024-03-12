"use client";
import { vars } from "@hojoon/themes";
// import { getVideosPopularList } from "@/features/main/api/getVideosPopularList";
import { useGetVideosPopularList } from "../../hooks/useGetVideosPopularList";
import { useEffect } from "react";

export const VideosPopularList = () => {
  // const data = await getVideosPopularList({});
  const { data, fetchNextPage, isFetchingNextPage } = useGetVideosPopularList(
    {},
  );
  useEffect(() => {
    fetchNextPage();
    setTimeout(() => {}, 2_000);
  }, []);

  return (
    <section style={{ color: vars.colors.$scale.gray[900] }}>
      <h2>목록</h2>
      <br />
      <p>fetching:{isFetchingNextPage ? "true" : "false"}</p>
      <br />
      <p>{data.pages?.[0].lists?.[0].title}</p>
    </section>
  );
};
