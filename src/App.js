import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Error404 from "./pages/404";
import ThemeProvider from './utils/themes/ThemeProvider';
import { useState } from "react";
import SoonPage from "./pages/Soon";

function App() {

  const [theme, setTheme] = useState({});

  return (
    <ThemeProvider value={{theme, setTheme}}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/soon" element={<SoonPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
