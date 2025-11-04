import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sample1Page from "./pages/Sample1Page";
import Sample2Page from "./pages/Sample2Page";
import SuryadiFatonahPage from "./pages/SuryadiFatonahPage";
import FatonahSuryadiPage from "./pages/FatonahSuryadiPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sample1" element={<Sample1Page />} />
      <Route path="/sample2" element={<Sample2Page />} />
      <Route path="/suryadi-fatonah" element={<SuryadiFatonahPage />} />
      <Route path="/fatonah-suryadi" element={<FatonahSuryadiPage />} />
    </Routes>
  );
}

export default App;
