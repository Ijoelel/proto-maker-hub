import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Clock, Star, Trophy } from "lucide-react";

export default function CirQuiz() {
  const quizzes = [
    {
      title: "Quiz Hukum Ohm",
      description: "Test pemahaman Anda tentang hukum Ohm dan aplikasinya.",
      questions: 15,
      duration: "20 menit",
      difficulty: "Mudah",
      icon: HelpCircle,
      color: "blue"
    },
    {
      title: "Quiz Rangkaian Listrik",
      description: "Evaluasi pengetahuan tentang jenis-jenis rangkaian listrik.",
      questions: 20,
      duration: "30 menit", 
      difficulty: "Sedang",
      icon: Star,
      color: "green"
    },
    {
      title: "Quiz Hukum Kirchoff",
      description: "Ujian pemahaman hukum Kirchoff dalam analisis rangkaian.",
      questions: 25,
      duration: "35 menit",
      difficulty: "Sulit",
      icon: Trophy,
      color: "purple"
    }
  ];

  const difficultyColors = {
    "Mudah": "text-circuit-green",
    "Sedang": "text-circuit-orange",
    "Sulit": "text-circuit-purple"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">CirQuiz</h1>
          </div>
          <button className="text-muted-foreground hover:text-foreground">
            Keluar
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-2">Kuis Interaktif</h2>
          <p className="text-muted-foreground">Uji pemahaman Anda dengan kuis-kuis berikut ini.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {quizzes.map((quiz, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <quiz.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className={`text-sm font-medium ${difficultyColors[quiz.difficulty as keyof typeof difficultyColors]}`}>
                    {quiz.difficulty}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">{quiz.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{quiz.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    {quiz.questions} soal
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {quiz.duration}
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Mulai Kuis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
