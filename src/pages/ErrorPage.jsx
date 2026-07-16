import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div className="mb-10 flex items-center flex-col ">
        <p className="text-5xl text-red-400">⚠</p>
        <h1 className="font-bold text-9xl text-white mb-5">404</h1>
        <h2 className="text-2xl text-white">페이지를 찾을 수 없습니다</h2>
      </div>

      <div className="px-5 py-3 border border-red-400 text-red-400 font-bold">
        <Link to={"/"}>홈으로 이동하기</Link>
      </div>
    </div>
  );
}
