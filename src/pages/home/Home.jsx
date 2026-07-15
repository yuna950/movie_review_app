import { useEffect, useState } from "react";
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpComing,
} from "../api/movieApi";
import { Link } from "react-router-dom";

export default function Home() {
  // const [num, setNum] = useState(0);

  // useEffect(() => {
  //   console.log("랜더링 될 때마다 실행");
  // });

  // useEffect(() => {
  //   console.log("처음 랜더링 시 1회 실행");
  // }, []);

  // useEffect(() => {
  //   console.log("num 값이 변경될 때마다 실행");
  // }, [num]);

  // -----------------------------------------------

  // useEffect(() => {
  //   const movieData = async () => {
  //     const nowPlayingData = await getNowPlaying();
  //     console.log(nowPlayingData.response.results);
  //   };
  //   movieData();
  // }, []);

  // -----------------------------------------------

  // const [nowData, setNowData] = useState();
  // const [popData, setPopData] = useState();
  // const [topData, settopData] = useState();
  // const [upData, setupData] = useState();

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        // const nowPlaying = await getNowPlaying();
        // const popular = await getPopular();
        // const topRated = await getTopRated();
        // const upComing = await getUpComing();

        // -----------------------------------------------

        const [nowPlaying, popular, topRated, upComing] = await Promise.all([
          getNowPlaying(),
          getPopular(),
          getTopRated(),
          getUpComing(),
        ]);

        setMovieData({
          nowPlaying,
          popular,
          topRated,
          upComing,
        });

        // -----------------------------------------------

        // setNowData(nowPlaying);
        // setPopData(popular);
        // settopData(topRated);
        // setupData(upComing);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(movieData?.nowPlaying?.response?.results[7]?.title);

  return (
    <div className="min-h-screen">
      <section
        style={{
          background: `#808080 url(https://image.tmdb.org/t/p/original${movieData?.nowPlaying?.response?.results[7]?.backdrop_path}) no-repeat center / cover`,
        }}
        className="h-[80vh] px-[20px] lg:px-[80px] xl:px-[200px] relative"
      >
        <div className="absolute bottom-[100px] left-[20px] lg:left-[80px] xl:left-[200px]">
          <h3 className="text-[30px] lg:text-[50px] xl:text-[70px] font-semibold">
            {movieData?.nowPlaying?.response?.results[7]?.title}
          </h3>
          <p className="text-[14px] xl:text-[18px] opacity-70 max-w-[800px] mt-4 mb-10">
            {movieData?.nowPlaying?.response?.results[7]?.overview.slice(
              0,
              100,
            ) + "..."}
          </p>

          <Link
            to={`/movie/${movieData?.nowPlaying?.response?.results[7]?.id}`}
            className=" px-8 py-3 bg-red-500 rounded-lg hover:bg-red-700 transition"
          >
            More View &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}

// *예외
// => try ~ catch
// => 조건문과 비슷하게 코드나 함수에 오류나 문제점이 발생했을 때 핸들링 처리 가능함
// => if문과 차이점은 if문은 무조건 조건을 작성해야하지만 try는 조건 없이 문제점을 잡아낼 수 있음
