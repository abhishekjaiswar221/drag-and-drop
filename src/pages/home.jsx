import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img className="h-ful w-96" src="/images/logo.png" alt="Logo" />

      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to Language Drops
        </h1>
        <h4 className="scroll-m-20 text-zinc-600 text-xl font-semibold tracking-tight">
          Drag to Learn!
        </h4>
        <Link to={"/game-page"}>
          <button
            type="button"
            className="text-white cursor-pointer bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-2xl text-lg px-12 py-4 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
          >
            Start Game
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
