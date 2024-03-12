import { VideosPopularList } from "@/features/main/components/VideosPopularList";
import * as s from "./page.css";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className={s.main}>
      <h1 style={{ padding: "20px" }}>타이틀</h1>
      <Suspense fallback={<div>fallback</div>}>
        <VideosPopularList />
      </Suspense>
    </main>
  );
}
