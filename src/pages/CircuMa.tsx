import { LearningCard } from "@/components/LearningCard";
import { Zap, Battery, GitBranch } from "lucide-react";

export default function CircuMa() {
  const learningMaterials = [
    {
      title: "Rangkaian Listrik",
      description: "Pengenalan rangkaian listrik, jenis-jenis rangkaian, dan karakteristiknya.",
      icon: Zap,
      iconColor: "blue" as const,
      buttonText: "Buka Materi"
    },
    {
      title: "Hukum Ohm", 
      description: "Memahami hubungan antara tegangan, arus, dan hambatan.",
      icon: Battery,
      iconColor: "green" as const,
      buttonText: "Buka Materi"
    },
    {
      title: "Hukum Kirchoff",
      description: "Hukum Kirchoff tentang arus dan tegangan dalam rangkaian.",
      icon: GitBranch,
      iconColor: "purple" as const,
      buttonText: "Buka Materi"
    }
  ];

  return (
    <div className="ml-64 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">CircuMa</h1>
          </div>
          <button className="text-muted-foreground hover:text-foreground">
            Keluar
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-2">Materi Pembelajaran</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningMaterials.map((material, index) => (
            <LearningCard
              key={index}
              title={material.title}
              description={material.description}
              icon={material.icon}
              iconColor={material.iconColor}
              buttonText={material.buttonText}
              onClick={() => console.log(`Opening ${material.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}