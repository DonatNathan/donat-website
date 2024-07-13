import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Error404 from "./pages/404";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />} />

          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
