import { VideosPopularList } from "@/features/main/components/VideosPopularList";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <VideosPopularList />
      </Suspense>
    </main>
  );
}
