import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Contact from "./components/view/Contact";
import About from "./components/view/About";
import Layout from "./components/view/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
