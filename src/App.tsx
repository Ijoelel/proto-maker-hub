import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MobileSidebar } from "@/components/MobileSidebar";
import CircuMa from "./pages/CircuMa";
import CircuLabs from "./pages/CircuLabs";
import CircuJobs from "./pages/CircuJobs"; 
import CirQuiz from "./pages/CirQuiz";
import CircuRef from "./pages/CircuRef";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen w-full">
          <MobileSidebar>
            <Routes>
              <Route path="/" element={<CircuMa />} />
              <Route path="/circulabs" element={<CircuLabs />} />
              <Route path="/circujobs" element={<CircuJobs />} />
              <Route path="/cirquiz" element={<CirQuiz />} />
              <Route path="/circuref" element={<CircuRef />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MobileSidebar>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
