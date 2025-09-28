import {
    Zap,
    Wrench,
    PenSquare,
    Library,
    Info,
    ArrowDown,
    BatteryCharging,
    Lightbulb,
    ToggleLeft,
    Radio,
    Waves,
    HelpCircle,
    XCircle,
    Power,
    RefreshCcw,
    Book,
    Wand2,
    ChevronLeft,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const components = [
    { name: "Baterai", value: "(5V)", icon: BatteryCharging },
    { name: "Lampu", value: "(10Ω)", icon: Lightbulb },
    { name: "Resistor", value: "(5Ω)", icon: Waves },
    { name: "Resistor", value: "(15Ω)", icon: Waves },
    { name: "Saklar", value: "", icon: ToggleLeft },
    { name: "LED", value: "(2Ω)", icon: Radio },
    { name: "Baterai", value: "(12V)", icon: BatteryCharging },
];

const ComponentPanelContent = () => (
    <>
        <div className="p-4">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Wrench size={20} /> Komponen
            </h2>
            <div className="grid grid-cols-2 gap-3">
                {components.map((comp, i) => (
                    <div
                        key={i}
                        className="bg-[#2A3C5B] rounded-lg p-3 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#4a628a] transition-colors"
                    >
                        <comp.icon size={32} className="mb-2 text-yellow-400" />
                        <p className="text-sm font-medium">{comp.name}</p>
                        <p className="text-xs text-gray-300">{comp.value}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="p-4 space-y-3">
            <Button className="w-full bg-[#1E90FF] hover:bg-[#1C86EE] text-white justify-start">
                <Wand2 size={16} className="mr-2" /> Mode Kabel
            </Button>
            <Button className="w-full bg-[#DC143C] hover:bg-[#C71585] text-white justify-start">
                <RefreshCcw size={16} className="mr-2" /> Reset
            </Button>
            <Button className="w-full bg-[#FFD700] hover:bg-[#EEC900] text-black justify-start">
                <Book size={16} className="mr-2" /> Tutorial
            </Button>
        </div>
        <div className="p-4">
            <div className="bg-[#2A3C5B] rounded-lg p-3">
                <h3 className="text-sm font-semibold flex items-center gap-2 mb-2 text-yellow-400">
                    <Info size={16} /> Petunjuk Penyambungan
                </h3>
                <ol className="list-decimal list-inside text-xs space-y-1 text-gray-300">
                    <li>Klik tombol Mode Kabel</li>
                    <li>Klik pada terminal (lingkaran emas)</li>
                    <li>Klik pada terminal komponen LAIN</li>
                </ol>
            </div>
        </div>
    </>
);

const ComponentSidebar = ({ className }: { className?: string }) => (
    <aside
        className={cn("w-64 bg-[#3B5074] text-white flex flex-col", className)}
    >
        <ScrollArea className="flex-1">
            <ComponentPanelContent />
        </ScrollArea>
    </aside>
);

const AnalysisPanelContent = () => (
    <div className="space-y-4 p-4">
        <div className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
                <Library size={20} /> Analisis Rangkaian
            </h2>
            <Badge
                variant="destructive"
                className="w-full justify-center text-base py-2"
            >
                <XCircle size={16} className="mr-2" /> Rangkaian terbuka
            </Badge>
            <div className="space-y-3">
                <div className="bg-[#2A3C5B] rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Zap size={16} className="text-yellow-400" />
                        <span className="text-sm">Tegangan Total (V):</span>
                    </div>
                    <span className="font-mono text-lg">0 V</span>
                </div>
                <div className="bg-[#2A3C5B] rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <HelpCircle size={16} className="text-yellow-400" />
                        <span className="text-sm">Arus Total (I):</span>
                    </div>
                    <span className="font-mono text-lg">0 A</span>
                </div>
                <div className="bg-[#2A3C5B] rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Waves size={16} className="text-yellow-400" />
                        <span className="text-sm">Resistansi Total (R):</span>
                    </div>
                    <span className="font-mono text-lg">0 Ω</span>
                </div>
            </div>
        </div>
        <Separator className="bg-gray-500/50" />
        <div className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
                <Info size={20} /> Status Terminal
            </h2>
            <div className="space-y-3">
                <div className="bg-[#2A3C5B] rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-white" />
                        <span className="text-sm">Terminal Terhubung:</span>
                    </div>
                    <span className="font-mono text-lg">0</span>
                </div>
                <div className="bg-[#2A3C5B] rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-white" />
                        <span className="text-sm">Terminal Terputus:</span>
                    </div>
                    <span className="font-mono text-lg">0</span>
                </div>
            </div>
        </div>
        <Separator className="bg-gray-500/50" />
        <div className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
                <Power size={20} /> Status Komponen
            </h2>
            <div className="space-y-3">
                <div className="bg-[#2A3C5B] rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <ToggleLeft size={16} className="text-gray-400" />
                        <span className="text-sm">Saklar:</span>
                    </div>
                    <Badge variant="secondary">Mati</Badge>
                </div>
                <div className="bg-[#2A3C5B] rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Lightbulb size={16} className="text-gray-400" />
                        <span className="text-sm">Lampu:</span>
                    </div>
                    <Badge variant="secondary">Mati</Badge>
                </div>
            </div>
        </div>
    </div>
);

const AnalysisSidebar = ({ className }: { className?: string }) => (
    <aside
        className={cn("w-72 bg-[#3B5074] text-white flex flex-col", className)}
    >
        <ScrollArea className="flex-1">
            <AnalysisPanelContent />
        </ScrollArea>
    </aside>
);

const Canvas = () => (
    <section className="flex-1 flex flex-col bg-[#2A3C5B] p-4">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-white mb-4">
            <PenSquare size={20} /> Pembuat Rangkaian
        </h2>
        <div
            className="flex-1 rounded-lg border-2 border-dashed border-gray-500/50 flex items-center justify-center"
            style={{
                backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 1px, transparent 0)",
                backgroundSize: "20px 20px",
            }}
        >
            <div className="text-center text-gray-400">
                <ArrowDown size={32} className="mx-auto mb-2" />
                <p>Tarik komponen ke sini untuk membangun rangkaian</p>
            </div>
        </div>
    </section>
);

export default function Simulation() {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen w-full flex-col bg-[#2A3C5B] overflow-hidden">
            <header className="flex-shrink-0 bg-[#3B5074] text-white p-3 shadow-md z-10">
                <div className="relative flex items-center justify-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-0 text-white hover:bg-white/10"
                        onClick={() => navigate("/")}
                        aria-label="Kembali"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <div className="absolute right-0 flex items-center gap-2 md:hidden">
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button
                                    size="sm"
                                    className="bg-white/10 text-white hover:bg-white/20"
                                >
                                    <Wrench className="mr-2 h-4 w-4" /> Komponen
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent className="bg-[#3B5074] text-white border-none">
                                <DrawerHeader className="flex items-center justify-between p-4 text-left">
                                    <div>
                                        <DrawerTitle className="text-white">
                                            Daftar Komponen
                                        </DrawerTitle>
                                        <DrawerDescription className="text-gray-200">
                                            Pilih komponen untuk ditambahkan ke
                                            workspace
                                        </DrawerDescription>
                                    </div>
                                    <DrawerClose asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-white hover:bg-white/10"
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </DrawerClose>
                                </DrawerHeader>
                                <ScrollArea className="max-h-[60vh] px-4 pb-6">
                                    <ComponentPanelContent />
                                </ScrollArea>
                            </DrawerContent>
                        </Drawer>
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button
                                    size="sm"
                                    className="bg-white/10 text-white hover:bg-white/20"
                                >
                                    <Library className="mr-2 h-4 w-4" />{" "}
                                    Analisis
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent className="bg-[#3B5074] text-white border-none">
                                <DrawerHeader className="flex items-center justify-between p-4 text-left">
                                    <div>
                                        <DrawerTitle className="text-white">
                                            Analisis Rangkaian
                                        </DrawerTitle>
                                        <DrawerDescription className="text-gray-200">
                                            Lihat status rangkaian dan komponen
                                        </DrawerDescription>
                                    </div>
                                    <DrawerClose asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-white hover:bg-white/10"
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </DrawerClose>
                                </DrawerHeader>
                                <ScrollArea className="max-h-[60vh] pb-6">
                                    <AnalysisPanelContent />
                                </ScrollArea>
                            </DrawerContent>
                        </Drawer>
                    </div>
                    <div className="text-center space-y-1">
                        <h1 className="text-xl font-bold flex items-center justify-center gap-2">
                            <Zap size={24} className="text-yellow-400" />{" "}
                            Simulator Rangkaian Listrik
                        </h1>
                    </div>
                </div>
            </header>
            <main className="flex flex-1 overflow-hidden">
                <ComponentSidebar className="hidden md:flex" />
                <Canvas />
                <AnalysisSidebar className="hidden md:flex" />
            </main>
        </div>
    );
}
