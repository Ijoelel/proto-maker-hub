import { useNavigate } from "react-router";
import { LearningCard } from "@/components/LearningCard";
import { learningMaterials } from "@/lib/learning-materials";

export default function CircuMa() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background">
            {/* Header - Only show on desktop */}
            <div className="hidden md:block bg-white border-b border-border px-8 py-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">CircuMa</h1>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">Keluar</button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-8">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-foreground mb-2">Materi Pembelajaran</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learningMaterials.map((material) => (
                        <LearningCard
                            key={material.slug}
                            title={material.title}
                            description={material.description}
                            icon={material.icon}
                            iconColor={material.iconColor}
                            buttonText={material.buttonText}
                            onDetailClick={() => navigate(`/materials/${material.slug}`)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
