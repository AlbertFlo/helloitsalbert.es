import { Route, Routes } from "react-router-dom";
import ProjectPage from "@/pages/ProjectPage";
import HomePage from "@/pages/HomePage";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
