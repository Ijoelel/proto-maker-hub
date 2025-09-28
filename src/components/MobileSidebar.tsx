import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
    BookOpen,
    FlaskConical,
    AlertTriangle,
    HelpCircle,
    FileText,
    User,
    LogOut,
    Menu,
    CircuitBoard,
    ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { learningMaterials } from "@/lib/learning-materials";

const navigation = [
    { name: "CircuMa", path: "/", icon: BookOpen },
    { name: "CircuLabs", path: "/circulabs", icon: AlertTriangle },
];

interface MobileSidebarProps {
    children: React.ReactNode;
}

export function MobileSidebar({ children }: MobileSidebarProps) {
    const [open, setOpen] = useState(false);
    const [circuMaOpen, setCircuMaOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const hideSidebarRoutes = ["/simulation"];
    const showSidebar = !hideSidebarRoutes.includes(location.pathname);
    const contentClasses = `w-full ${
        showSidebar ? "md:ml-64 md:w-[calc(100%-16rem)]" : ""
    }`;

    const circuMaActive =
        location.pathname === "/" || location.pathname.startsWith("/materials");
    const activeMaterialSlug = location.pathname.startsWith("/materials/")
        ? location.pathname.split("/")[2]
        : undefined;

    useEffect(() => {
        setCircuMaOpen(circuMaActive);
    }, [circuMaActive]);

    const handleNavigate = (path: string, shouldCloseSheet = false) => {
        navigate(path);
        if (shouldCloseSheet) {
            setOpen(false);
        }
    };

    const renderMaterialLinks = (onNavigate: (path: string) => void) => (
        <div className="mt-2 space-y-1 pl-11">
            {learningMaterials.map((material) => {
                const isActive = activeMaterialSlug === material.slug;
                return (
                    <button
                        key={material.slug}
                        type="button"
                        onClick={() => onNavigate(`/materials/${material.slug}`)}
                        className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors text-white/80 hover:bg-white/10 ${
                            isActive ? "bg-white/20 text-white" : ""
                        }`}
                    >
                        {material.title}
                    </button>
                );
            })}
        </div>
    );

    return (
        <>
            {showSidebar && (
                <>
                    {/* Mobile Header */}
                    <div className="md:hidden">
                        <div className="bg-gradient-sidebar border-b border-white/10 px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Sheet open={open} onOpenChange={setOpen}>
                                    <SheetTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-white hover:bg-white/10"
                                        >
                                            <Menu className="h-6 w-6" />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent
                                        side="left"
                                        className="p-0 bg-gradient-sidebar border-r border-white/10 w-64"
                                    >
                                        <SheetHeader className="p-6 border-b border-white/10 text-left">
                                            <SheetTitle className="text-white text-xl font-bold">
                                                CircuitPintar
                                            </SheetTitle>
                                            <SheetDescription className="text-white/80 text-sm">
                                                Media Pembelajaran Interaktif
                                            </SheetDescription>
                                        </SheetHeader>

                                        {/* Navigation */}
                                        <nav className="flex-1 px-4 py-6 space-y-2">
                                            <div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleNavigate("/", true)}
                                                    className={`flex w-full items-center px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition-colors ${
                                                        circuMaActive
                                                            ? "bg-white/20 text-white font-medium"
                                                            : ""
                                                    }`}
                                                >
                                                    <BookOpen className="w-5 h-5 mr-3" />
                                                    CircuMa
                                                    <span
                                                        className="ml-auto"
                                                        onClick={(event) => {
                                                            event.stopPropagation();
                                                            setCircuMaOpen((prev) => !prev);
                                                        }}
                                                    >
                                                        <ChevronDown
                                                            className={`h-4 w-4 transition-transform ${
                                                                circuMaOpen ? "rotate-180" : ""
                                                            }`}
                                                        />
                                                    </span>
                                                </button>
                                                {circuMaOpen && renderMaterialLinks((path) => handleNavigate(path, true))}
                                            </div>

                                            {navigation
                                                .filter((item) => item.name !== "CircuMa")
                                                .map((item) => {
                                                    const isActive = location.pathname === item.path;
                                                    return (
                                                        <button
                                                            key={item.name}
                                                            type="button"
                                                            onClick={() => handleNavigate(item.path, true)}
                                                            className={`flex w-full items-center px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition-colors ${
                                                                isActive
                                                                    ? "bg-white/20 text-white font-medium"
                                                                    : ""
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
                                    </SheetContent>
                                </Sheet>

                                <div>
                                    <h1 className="text-white text-lg font-bold">
                                        CircuitPintar
                                    </h1>
                                </div>
                            </div>

                            <Button
                                variant="ghost"
                                className="text-white/90 hover:bg-white/10 hover:text-white text-sm"
                            >
                                Keluar
                            </Button>
                        </div>
                    </div>

                    {/* Desktop Sidebar */}
                    <div className="hidden md:block">
                        <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-sidebar shadow-sidebar flex flex-col">
                            {/* Header */}
                            <div className="p-6 border-b border-white/10">
                                <h1 className="text-white text-xl font-bold">
                                    CircuitPintar
                                </h1>
                                <p className="text-white/80 text-sm mt-1">
                                    Media Pembelajaran Interaktif
                                </p>
                            </div>

                            {/* Navigation */}
                            <nav className="flex-1 px-4 py-6 space-y-2">
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => handleNavigate("/")}
                                        className={`flex w-full items-center px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition-colors ${
                                            circuMaActive ? "bg-white/20 text-white font-medium" : ""
                                        }`}
                                    >
                                        <BookOpen className="w-5 h-5 mr-3" />
                                        CircuMa
                                        <span
                                            className="ml-auto"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setCircuMaOpen((prev) => !prev);
                                            }}
                                        >
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform ${
                                                    circuMaOpen ? "rotate-180" : ""
                                                }`}
                                            />
                                        </span>
                                    </button>
                                    {circuMaOpen && renderMaterialLinks((path) => handleNavigate(path))}
                                </div>

                                {navigation
                                    .filter((item) => item.name !== "CircuMa")
                                    .map((item) => {
                                        const isActive = location.pathname === item.path;
                                        return (
                                            <button
                                                key={item.name}
                                                type="button"
                                                onClick={() => handleNavigate(item.path)}
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
                    </div>
                </>
            )}

            {/* Content */}
            <div className={contentClasses}>{children}</div>
        </>
    );
}
