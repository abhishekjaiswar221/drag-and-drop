import { EyeOff, UserRound } from "lucide-react";

const GamePage = () => {
  return (
    <div className="flex justify-center gap-32 items-center flex-col h-screen">
      <div>
        <h1 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Drag Image to Learn or Hide
        </h1>
      </div>
      <div className="container">
        <div className="flex justify-between w-full items-center">
          <div className="bg-sky-500 p-14 rounded-full">
            <EyeOff className="text-white" size={100} />
          </div>
          <div>Content</div>
          <div>
            <div className="bg-sky-500 p-14 rounded-full">
              <UserRound className="text-white" size={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
