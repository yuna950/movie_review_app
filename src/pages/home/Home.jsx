import { useEffect, useState } from "react";
import {
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpComing,
} from "../api/movieApi";
import Loading from "../../components/Loading";
import Section_1 from "./components/Section_1";
import Section_2 from "./components/Section_2";

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
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // console.log(movieData?.nowPlaying?.response?.results[1]?.title);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  const nowPlayingData = movieData?.nowPlaying?.response;
  const popularData = movieData?.popular?.response;
  const topRatedData = movieData?.topRated?.response;
  const upComingData = movieData?.upComing?.response;
  console.log(popularData);

  return (
    <div className="min-h-screen">
      <Section_1 data={nowPlayingData.results[0]} />

      <div className="px-[20px] lg:px-[80px] xl:px-[200px] py-[100px] xl:py-[150px] font-[600]">
        <Section_2 title={"현재 상영 중"} data={nowPlayingData} />
        <Section_2 title={"인기 영화"} data={popularData} />
        <Section_2 title={"평점 높은 순"} data={topRatedData} />
        <Section_2 title={"개봉 예정"} data={upComingData} />
      </div>
    </div>
  );
}

// *예외
// => try ~ catch ~ finally
// => 조건문과 비슷하게 코드나 함수에 오류나 문제점이 발생했을 때 핸들링 처리 가능함
// => if문과 차이점은 if문은 무조건 조건을 작성해야하지만 try는 조건 없이 문제점을 잡아낼 수 있음
// => finally는 try catch와 상관 없이 마지막에 무조건 실행되는 코드를 작성함
