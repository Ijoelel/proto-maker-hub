import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface LearningDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: {
    description: string;
    videoTitle?: string;
    videoDescription?: string;
    quiz: Array<{
      question: string;
      options: string[];
      correctAnswer: number;
    }>;
  };
}

export function LearningDetailModal({ isOpen, onClose, title, content }: LearningDetailModalProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6 rounded-sm opacity-70 hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <Tabs defaultValue="konten" className="flex-1 flex flex-col">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="konten">Konten</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
            <TabsTrigger value="kuis">Kuis</TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-y-auto">
            <TabsContent value="konten" className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <h4 className="text-base font-medium text-muted-foreground">Memahami {title}: Dasar-Dasar Elektronika</h4>
              <p className="text-sm leading-relaxed">{content.description}</p>
              
              {/* Video placeholder */}
              <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900"></div>
                <div className="relative z-10 text-center text-white">
                  <div className="text-yellow-400 text-2xl font-bold mb-2">DASAR</div>
                  <div className="text-xl font-bold">ANALOGI TEGANGAN</div>
                  <div className="mt-4 bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <div className="w-0 h-0 border-l-8 border-r-0 border-t-6 border-b-6 border-l-white border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-sm flex items-center gap-2">
                  R <span className="text-blue-300">→</span> I
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">Penjelasan lengkap tentang {title} dengan contoh aplikasi sehari-hari.</p>
            </TabsContent>

            <TabsContent value="video" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{content.videoTitle || `Video ${title}`}</h3>
                <p className="text-sm text-muted-foreground">{content.videoDescription || `Video pembelajaran tentang ${title}`}</p>
                
                <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="text-yellow-400 text-2xl font-bold mb-2">DASAR</div>
                    <div className="text-xl font-bold">ANALOGI TEGANGAN</div>
                    <div className="mt-4 bg-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto cursor-pointer hover:bg-red-700 transition-colors">
                      <div className="w-0 h-0 border-l-10 border-r-0 border-t-8 border-b-8 border-l-white border-t-transparent border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-sm flex items-center gap-2">
                    R <span className="text-blue-300">→</span> I
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="kuis" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Kuis {title}</h3>
                
                {content.quiz.map((question, questionIndex) => (
                  <div key={questionIndex} className="space-y-3">
                    <h4 className="font-medium">{questionIndex + 1}. {question.question}</h4>
                    
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${
                            selectedAnswers[questionIndex] === optionIndex
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:bg-muted'
                          }`}
                        >
                          {String.fromCharCode(65 + optionIndex)}. {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                
                <Button className="bg-circuit-blue hover:bg-circuit-blue/90 text-white">
                  Kirim Jawaban
                </Button>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}