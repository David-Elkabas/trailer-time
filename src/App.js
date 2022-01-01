import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <div className="app">
        <div>
          <BrowserRouter>
            <NavBar />

            <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
