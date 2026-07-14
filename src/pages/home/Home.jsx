import { getNowPlaying } from "../api/movieApi";

export default function Home() {
  const nowPlayingData = getNowPlaying();
  console.log(nowPlayingData);
  return <div className="w-[300px] h-[300px] bg-blue-100 ">home</div>;
}
