const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmE3MjAzNzM1OThhNGQ3OTI0ODY2M2IyNzBmYzU5OSIsIm5iZiI6MTc4Mzk5OTY0OS43MTUwMDAyLCJzdWIiOiI2YTU1YWNhMTc3MWEyZTA3MDQ2NjNhMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZzmK-dG8xM7DjF_hO4sV3QxVUA6F5X8DdiyUgRuFQ0I`,
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

  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return { response };
};

export const getNowPlaying = () => fetchMovie("movie/now_playing");
