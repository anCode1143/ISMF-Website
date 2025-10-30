import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApplyNowModal } from "@/components/ApplyNowModal";
import { useApplyModal } from "@/hooks/useApplyModal";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import About from "@/pages/About.jsx";
import Divisions from "@/pages/Divisions.jsx";
import Research from "@/pages/Research.jsx";
import Performance from "@/pages/Performance.jsx";
import Events from "@/pages/Events.jsx";
import Layout from "@/components/Layout.jsx"

const queryClient = new QueryClient();

const App = () => {
  const { isOpen, closeModal } = useApplyModal();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />

              <Route path="/about" element={<About />} />
              <Route path="/divisions" element={<Divisions />} />
              <Route path="/events" element={<Events />} />
              <Route path="/research" element={<Research />} />
              <Route path="/performance" element={<Performance />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>

        {/* Global Apply Now Modal */}
        <ApplyNowModal isOpen={isOpen} onClose={closeModal} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
