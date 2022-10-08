import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import DetailedCoffeeCard from "./components/DetailedCoffeeCard";
import Footer from "./components/Footer";
import Special from "./components/Special";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Main />} />
          <Route path="details" element={<DetailedCoffeeCard />}></Route>
        </Routes>
      </BrowserRouter>
      <Special></Special>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}

export default App;
