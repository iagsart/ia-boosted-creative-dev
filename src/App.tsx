
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import Development from "./pages/services/Development";
import AI from "./pages/services/AI";
import Content from "./pages/services/Content";
import Data from "./pages/services/Data";
import Music from "./pages/services/Music";
import Consulting from "./pages/services/Consulting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/ai" element={<AI />} />
          <Route path="/services/content" element={<Content />} />
          <Route path="/services/data" element={<Data />} />
          <Route path="/services/music" element={<Music />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
