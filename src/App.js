import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Error404 from "./pages/404";
import TakerPage from "./pages/Taker";
import DevPage from "./pages/Dev";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/taker" element={<TakerPage />} />
          <Route path="/dev" element={<DevPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
