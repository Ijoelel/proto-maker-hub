import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router";
import { MobileSidebar } from "@/components/MobileSidebar";
import CircuMa from "./pages/CircuMa";
import CircuLabs from "./pages/CircuLabs";
import LearningMaterialDetail from "./pages/LearningMaterialDetail";
import Simulation from "./pages/Simulation";
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
                            <Route
                                path="/materials/:slug"
                                element={<LearningMaterialDetail />}
                            />
                            <Route
                                path="/simulation"
                                element={<Simulation />}
                            />
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
