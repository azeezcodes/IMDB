import Nav from "./components/Nav";
import Home from "./components/Home";
import Search from "./components/Search";
import SearchAll from "./components/SearchAll";
import Each from "./components/Each";
import { Routes, Route } from "react-router-dom";

function App() {
   return (
      <div className="App">
         <Nav />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchmovie" element={<SearchAll />} />
            <Route path="/searchtitle" element={<Search />} />
            <Route path="/movie/:id" element={<Each />} />
         </Routes>
      </div>
   );
}

export default App;
