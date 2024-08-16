import { createRoot } from "react-dom/client";
import SearchParams from "./SeachParams";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Details from "./Details";
import { Link } from "react-router-dom";
const App = () => {
  return (
  <BrowserRouter>
    
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
     
    <Routes>
      <Route path="/details/:id" element={<Details/>}></Route>
      <Route path="/" element={<SearchParams/>}></Route>
      
    </Routes>
  </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
