import { useState } from "react";
import { LearningCard } from "@/components/LearningCard";
import { LearningDetailModal } from "@/components/LearningDetailModal";
import { Zap, Battery, GitBranch } from "lucide-react";

export default function CircuMa() {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  
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

  const materialDetails = {
    "Rangkaian Listrik": {
      description: "Rangkaian listrik adalah jalur tertutup yang memungkinkan arus listrik mengalir. Dalam rangkaian listrik, komponen-komponen elektronik seperti resistor, kapasitor, dan induktor terhubung satu sama lain untuk membentuk jalur yang memungkinkan aliran elektron. Pemahaman tentang rangkaian listrik sangat penting dalam dunia elektronika.",
      quiz: [
        {
          question: "Apa yang dimaksud dengan rangkaian listrik?",
          options: ["Jalur terbuka untuk arus listrik", "Jalur tertutup untuk arus listrik", "Komponen elektronik", "Sumber tegangan"],
          correctAnswer: 1
        }
      ]
    },
    "Hukum Ohm": {
      description: "Hukum Ohm adalah salah satu prinsip paling fundamental dalam dunia elektronika. Dengan memahami hukum ini, Anda akan bisa merancang, menganalisis, dan memecahkan berbagai rangkaian listrik sederhana.",
      quiz: [
        {
          question: "Rumus Hukum Ohm adalah...",
          options: ["V = I × R", "I = V × R", "R = V × I", "P = V × I"],
          correctAnswer: 0
        }
      ]
    },
    "Hukum Kirchoff": {
      description: "Hukum Kirchoff terdiri dari dua hukum dasar yang sangat penting dalam analisis rangkaian listrik. Hukum pertama tentang arus (KCL) dan hukum kedua tentang tegangan (KVL) membantu kita memahami bagaimana arus dan tegangan bekerja dalam rangkaian kompleks.",
      quiz: [
        {
          question: "Hukum Kirchoff tentang arus menyatakan bahwa...",
          options: ["Jumlah arus masuk sama dengan arus keluar", "Arus selalu konstan", "Tegangan selalu sama", "Resistansi bertambah"],
          correctAnswer: 0
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Only show on desktop */}
      <div className="hidden md:block bg-white border-b border-border px-8 py-6">
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
      <div className="p-4 md:p-8">
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
              onDetailClick={() => setSelectedMaterial(material.title)}
            />
          ))}
        </div>
      </div>

      {/* Learning Detail Modal */}
      <LearningDetailModal
        isOpen={!!selectedMaterial}
        onClose={() => setSelectedMaterial(null)}
        title={selectedMaterial || ""}
        content={selectedMaterial ? materialDetails[selectedMaterial as keyof typeof materialDetails] : { description: "", quiz: [] }}
      />
    </div>
  );
}