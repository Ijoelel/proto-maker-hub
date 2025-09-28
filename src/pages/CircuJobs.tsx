import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye } from "lucide-react";

export default function CircuJobs() {
  const jobsheets = [
    {
      title: "Jobsheet Hukum Ohm",
      description: "Lembar kerja praktikum untuk mempelajari hukum Ohm dalam rangkaian listrik.",
      type: "PDF"
    },
    {
      title: "Jobsheet Rangkaian Seri-Paralel",
      description: "Panduan praktikum untuk memahami rangkaian seri dan paralel.",
      type: "PDF"
    },
    {
      title: "Jobsheet Hukum Kirchoff",
      description: "Lembar kerja untuk mempelajari hukum Kirchoff dalam analisis rangkaian.",
      type: "PDF"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">CircuJobs</h1>
          </div>
          <button className="text-muted-foreground hover:text-foreground">
            Keluar
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-2">Jobsheet Praktikum</h2>
          <p className="text-muted-foreground">Download dan gunakan jobsheet berikut untuk panduan praktikum Anda.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {jobsheets.map((jobsheet, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-circuit-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{jobsheet.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{jobsheet.description}</p>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <Eye className="w-4 h-4 mr-2" />
                        Lihat
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download
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
