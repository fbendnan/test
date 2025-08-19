import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Layout from "./HLF/layout";
import Header from "./HLF/header";

export default function Markup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<MainPage />} />
          {/* <Route path="/add_book" element={<Header />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
