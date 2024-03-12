import { PopularListItem } from "@/features/main/api/getVideosPopularList";
import * as s from "./style.css";
import Link from "next/link";

type Props = {
  video: PopularListItem;
};

export const VideosPopularListItem = ({ video }: Props) => {
  const { title } = video;
  return (
    <div className={s.wrapper}>
      <Link href="/" className={s.link}>
        <div className={s.thumbnailWrapper}></div>
      </Link>
    </div>
  );
};
