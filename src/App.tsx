
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GameBlog from "./pages/GameBlog";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/game/:gameId/blog" element={<GameBlog />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
