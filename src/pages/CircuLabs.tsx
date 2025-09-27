import { SimulationCard } from "@/components/SimulationCard";
import { Zap, FlaskConical } from "lucide-react";

export default function CircuLabs() {
  const simulations = [
    {
      title: "Simulasi Hukum Ohm",
      description: "Simulasi dan PhET Interactive Simulations.",
      icon: Zap,
      isEmpty: true
    },
    {
      title: "Simulasi Rangkaian Listrik", 
      description: "Simulasi interaktif untuk memahami Rangkaian Listrik.",
      icon: FlaskConical,
      buttonText: "Mulai Simulasi"
    }
  ];

  const simulationSteps = [
    "Pilih simulasi yang ingin Anda gunakan",
    "Atur parameter sesuai dengan petunjuk praktikum", 
    "Lakukan pengamatan terhadap hasil simulasi",
    "Catat hasil pengamatan Anda di jobsheet",
    "Analisis hasil pengamatan dan buat kesimpulan"
  ];

  return (
    <div className="ml-64 min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">CircuLabs</h1>
          </div>
          <button className="text-muted-foreground hover:text-foreground">
            Keluar
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">CircuLabs</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {simulations.map((simulation, index) => (
              <SimulationCard
                key={index}
                title={simulation.title}
                description={simulation.description}
                icon={simulation.icon}
                buttonText={simulation.buttonText}
                isEmpty={simulation.isEmpty}
                onClick={() => console.log(`Starting ${simulation.title}`)}
              />
            ))}
          </div>

          {/* Panduan Simulasi */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Panduan Simulasi</h3>
            <ol className="space-y-3">
              {simulationSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}