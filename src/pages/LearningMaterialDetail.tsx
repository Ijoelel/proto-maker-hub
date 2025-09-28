import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { LearningMaterialContent } from "@/components/LearningMaterialContent";
import { findMaterialBySlug } from "@/lib/learning-materials";

export default function LearningMaterialDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const material = useMemo(() => findMaterialBySlug(slug), [slug]);

    if (!material) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
                <div className="max-w-xl text-center space-y-4">
                    <h1 className="text-3xl font-semibold text-foreground">Materi tidak ditemukan</h1>
                    <p className="text-muted-foreground">
                        Kami tidak dapat menemukan materi yang Anda cari. Silakan pilih materi lain dari daftar CircuMa.
                    </p>
                    <Button onClick={() => navigate("/")} className="bg-circuit-blue hover:bg-circuit-blue/90 text-white">
                        Kembali ke CircuMa
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <div className="hidden md:block bg-white border-b border-border px-8 py-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground mb-1">CircuMa · Materi Pembelajaran</p>
                        <h1 className="text-2xl font-bold text-foreground">{material.title}</h1>
                    </div>
                    <Button
                        variant="ghost"
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() => navigate("/")}
                    >
                        Kembali ke CircuMa
                    </Button>
                </div>
            </div>

            <div className="w-full px-4 py-4 md:px-8 md:py-6 space-y-4">
                <Button variant="ghost" className="flex items-center gap-2" onClick={() => navigate(-1)}>
                    <ArrowLeft className="h-4 w-4" />
                    Kembali
                </Button>

                <div className="bg-white rounded-xl shadow-card border border-border overflow-hidden">
                    <div className="border-b px-6 py-5 bg-muted/40">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                            <div>
                                <h2 className="text-xl font-semibold text-foreground">{material.title}</h2>
                                <p className="text-sm text-muted-foreground">{material.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col min-h-[70vh]">
                        <LearningMaterialContent title={material.title} content={material.detail} />
                    </div>
                </div>
            </div>
        </div>
    );
}
