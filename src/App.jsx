import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Sample1Page from "./pages/Sample1Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sample1" element={<Sample1Page />} />
    </Routes>
  );
}

export default App;
