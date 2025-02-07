import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import GamePage from "./pages/game-page";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/game-page" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
