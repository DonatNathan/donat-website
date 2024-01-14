import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Header from "./modules/header/Header";
import Footer from "./modules/footer/Footer";
import HomeBook from "./pages/book/HomeBook";
import Error404 from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Error404 />} />

        <Route path="/" element={<HomePage />} />
        
        <Route path="/homebook" element={<HomeBook />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
