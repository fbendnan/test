import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/HLF/layout";
import Home from "./components/Pages/Home/HomePage";


function Markup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Markup;