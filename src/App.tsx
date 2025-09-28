import { useLayoutEffect, useState, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Routes, Route } from "react-router";
import { createBrowserHistory } from "@remix-run/router";
import { MobileSidebar } from "@/components/MobileSidebar";
import CircuMa from "./pages/CircuMa";
import CircuLabs from "./pages/CircuLabs";
import Simulation from "./pages/Simulation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const history = createBrowserHistory();

const HistoryRouter = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState({
        action: history.action,
        location: history.location,
    });

    useLayoutEffect(() => history.listen(setState), []);

    return (
        <Router
            navigator={history}
            location={state.location}
            navigationType={state.action}
        >
            {children}
        </Router>
    );
};

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <HistoryRouter>
                <div className="min-h-screen w-full">
                    <MobileSidebar>
                        <Routes>
                            <Route path="/" element={<CircuMa />} />
                            <Route path="/circulabs" element={<CircuLabs />} />
                            <Route
                                path="/simulation"
                                element={<Simulation />}
                            />
                            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </MobileSidebar>
                </div>
            </HistoryRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
