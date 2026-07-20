const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    // env파일은 src 바깥에 있어야함
  },
};

// const nowPlayingUrl = baseUrl + "movie/now_playing" + "language=ko-kr&page=1";
// const popularUrl = baseUrl + "movie/popular" + "language=ko-kr&page=1";
// const topRatedUrl = baseUrl + "movie/top_rated" + "language=ko-kr&page=1";
// const upcomingUrl = baseUrl + "movie/upcoming" + "language=ko-kr&page=1";

// async = 비동기 (비동기 처리하면 불러오면서 다른 작업도 같이 동시 진행 가능)
// => 함수 앞에 위치. 기다릴 대상 함수 앞에 await 붙일 것.

const fetchMovie = async (endpoint) => {
  const url = baseUrl + endpoint + "?language=ko-kr&page=1";

  const response = await fetch(url, options).then((res) => res.json());

  return { response };
};

// 영화 리스트 요청
export const getNowPlaying = () => fetchMovie("movie/now_playing");
export const getPopular = () => fetchMovie("movie/popular");
export const getTopRated = () => fetchMovie("movie/top_rated");
export const getUpComing = () => fetchMovie("movie/upcoming");

// 영화 상세 요청
export const getDetail = (movie_id) => fetchMovie(`movie/${movie_id}`);
