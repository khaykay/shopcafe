import "./App.css";
// import NavBar from "./components/NavBar";
// import Search from "./components/Search";
// import Categories from "./components/Categories";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import DetailedCoffeeCard from "./components/DetailedCoffeeCard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Main />} />
          <Route path="details" element={<DetailedCoffeeCard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
