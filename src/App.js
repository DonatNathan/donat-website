import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Error404 from "./pages/404";
import Header from "./modules/header/Header";
import Footer from "./modules/footer/Footer";

function App() {
  return (
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="*" element={<Error404 />} />

          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
