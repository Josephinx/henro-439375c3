import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PersonaDashboard from "./pages/PersonaDashboard";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/persona/:slug" element={<PersonaDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
