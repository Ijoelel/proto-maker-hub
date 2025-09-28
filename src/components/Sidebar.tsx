import { useLocation, useNavigate } from "react-router";
import {
    BookOpen,
    FlaskConical,
    AlertTriangle,
    HelpCircle,
    FileText,
    User,
    LogOut,
    CircuitBoard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
    { name: "CircuMa", path: "/", icon: BookOpen },
    { name: "CircuLabs", path: "/circulabs", icon: AlertTriangle },
];

export function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-sidebar shadow-sidebar flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-white/10">
                <h1 className="text-white text-xl font-bold">CircuitPintar</h1>
                <p className="text-white/80 text-sm mt-1">
                    Media Pembelajaran Interaktif
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2">
                {navigation.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <button
                            key={item.name}
                            type="button"
                            onClick={() => navigate(item.path)}
                            className={`flex w-full items-center px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition-colors ${
                                isActive ? "bg-white/20 text-white font-medium" : ""
                            }`}
                        >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.name}
                        </button>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 space-y-2">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-white/90 hover:bg-white/10 hover:text-white"
                >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                </Button>
                <Button
                    variant="ghost"
                    className="w-full justify-start text-white/90 hover:bg-white/10 hover:text-white"
                >
                    <LogOut className="w-4 h-4 mr-2" />
                    Keluar
                </Button>
            </div>
        </div>
    );
}
