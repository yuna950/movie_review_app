import Loading from "../../components/Loading";
import PageTitle from "../../components/PageTitle";
import { ORIGINAL_URL, W500_URL } from "../../constant/imgBaseUrl";
import { getDetail } from "../api/movieApi";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function movie() {
  const { id } = useParams();
  // => url의 매개변수 값을 객체로 반환
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  console.log(id);

  useEffect(() => {
    (async () => {
      try {
        const detailData = await getDetail(id);
        setData(detailData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  const detailData = data?.response;
  // console.log(detailData);
  return (
    <div className="min-h-screen">
      <PageTitle title={detailData.title} />

      <div
        style={{
          background: `#808080 url(${ORIGINAL_URL}${detailData.backdrop_path}) no-repeat center / cover`,
        }}
        className="h-[80vh] px-[20px] lg:px-[80px] xl:px-[200px] relative "
      >
        <div className=" absolute left-8 bottom-8">
          <p className="font-bold text-4xl mb-5">{detailData.title}</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-10 md:py-16 md:flex items-start justify-center gap-5">
        <div className="w-full lg:w-[50%] xl:w-[50%]">
          <img
            className="w-full"
            src={W500_URL + detailData.poster_path}
            alt={detailData.title}
          />
        </div>

        <div className="mt-5 opacity-80">
          <div className="flex items-center space-x-4 mb-5 text-sm">
            <span>⭐{detailData.vote_average}점</span>
            <span>•</span>
            <span>{detailData.runtime}분</span>
            <span>•</span>
            <span>{detailData.release_date}</span>
          </div>

          <ul className="text-sm space-y-2 ">
            {detailData.genres.map((genre) => (
              <li key={genre.id}>• {genre.name}</li>
            ))}
          </ul>

          <p className="mt-9 text-sm">{detailData.overview}</p>
        </div>
      </div>
    </div>
  );
}
