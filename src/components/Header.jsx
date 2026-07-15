import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="
        px-[20px] lg:px-[80px] xl:px-[200px] py-6 
        flex justify-between items-center fixed top-0 left-0 z-10
        w-full"
    >
      <div className="text-red-500 font-bold text-lg xl:text-2xl tracking-tight">
        <Link to={"/"}>MOVIE</Link>
      </div>

      <ul className="flex gap-[80px] font-bold">
        <li className="hover:text-red-500 transition">
          <Link to={"/"}>HOME</Link>
        </li>
        <li className="hover:text-red-500 transition">
          <Link to={"/search"}>SEARCH</Link>
        </li>
      </ul>
    </header>
  );
}
