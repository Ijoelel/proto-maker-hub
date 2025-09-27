import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, ExternalLink, FileText, Video } from "lucide-react";

export default function CircuRef() {
  const references = [
    {
      title: "Elektronika Dasar",
      author: "Prof. Dr. Malvino",
      type: "Buku",
      description: "Referensi lengkap tentang elektronika dasar dan rangkaian listrik.",
      icon: Book,
      color: "blue"
    },
    {
      title: "Circuit Analysis Theory",
      author: "Robert L. Boylestad",
      type: "E-Book",
      description: "Analisis rangkaian listrik dengan pendekatan teoritis dan praktis.",
      icon: FileText,
      color: "green"
    },
    {
      title: "Video Tutorial Rangkaian",
      author: "Khan Academy",
      type: "Video",
      description: "Serie video pembelajaran tentang konsep rangkaian listrik.",
      icon: Video,
      color: "purple"
    },
    {
      title: "PhET Interactive Simulations",
      author: "University of Colorado",
      type: "Online",
      description: "Simulasi interaktif untuk pembelajaran fisika dan elektronika.",
      icon: ExternalLink,
      color: "orange"
    },
    {
      title: "Elektronika Analog",
      author: "Thomas L. Floyd",
      type: "Buku",
      description: "Pembahasan mendalam tentang elektronika analog dan komponen.",
      icon: Book,
      color: "blue"
    },
    {
      title: "Circuit Simulator Tools",
      author: "Various Authors",
      type: "Software",
      description: "Kumpulan software simulasi rangkaian untuk pembelajaran.",
      icon: ExternalLink,
      color: "green"
    }
  ];

  const typeColors = {
    "Buku": "bg-circuit-blue",
    "E-Book": "bg-circuit-green", 
    "Video": "bg-circuit-purple",
    "Online": "bg-circuit-orange",
    "Software": "bg-circuit-green"
  };

  return (
    <div className="ml-64 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">CircuRef</h1>
          </div>
          <button className="text-muted-foreground hover:text-foreground">
            Keluar
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-2">Referensi Pembelajaran</h2>
          <p className="text-muted-foreground">Kumpulan referensi dan sumber belajar untuk memperdalam pemahaman.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {references.map((ref, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${typeColors[ref.type as keyof typeof typeColors]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <ref.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{ref.title}</h3>
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                        {ref.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{ref.author}</p>
                    <p className="text-sm text-muted-foreground mb-4">{ref.description}</p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Buka
                      </Button>
                      <Button size="sm" variant="outline">
                        Simpan
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}