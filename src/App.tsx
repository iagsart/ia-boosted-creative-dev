
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/context/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Development from "./pages/services/Development";
import AI from "./pages/services/AI";
import Content from "./pages/services/Content";
import Data from "./pages/services/Data";
import MusicService from "./pages/services/Music";
import Consulting from "./pages/services/Consulting";
import ServicesIndex from "./pages/services/index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services">
              <Route index element={<ServicesIndex />} />
              <Route path="development" element={<Development />} />
              <Route path="ai" element={<AI />} />
              <Route path="content" element={<Content />} />
              <Route path="data" element={<Data />} />
              <Route path="music" element={<MusicService />} />
              <Route path="consulting" element={<Consulting />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
