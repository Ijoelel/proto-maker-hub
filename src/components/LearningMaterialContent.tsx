import { useEffect, useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ChevronLeft, ChevronRight, RotateCcw, XCircle } from "lucide-react";
import type { LearningMaterialDetail } from "@/lib/learning-materials";

interface LearningMaterialContentProps {
    title: string;
    content: LearningMaterialDetail;
}

export function LearningMaterialContent({ title, content }: LearningMaterialContentProps) {
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        setSelectedAnswers({});
        setQuizSubmitted(false);
        setCurrentQuestionIndex(0);
    }, [title]);

    const currentQuestion = useMemo(
        () => content.quiz?.[currentQuestionIndex],
        [content.quiz, currentQuestionIndex],
    );

    const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
        if (quizSubmitted) {
            return;
        }

        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: answerIndex,
        }));
    };

    const handleSubmitQuiz = () => {
        if (Object.keys(selectedAnswers).length === content.quiz.length) {
            setQuizSubmitted(true);
        }
    };

    const handleRetakeQuiz = () => {
        setSelectedAnswers({});
        setQuizSubmitted(false);
        setCurrentQuestionIndex(0);
    };

    const results = useMemo(() => {
        if (!quizSubmitted || !content.quiz.length) {
            return null;
        }

        const correct = content.quiz.reduce((count, question, index) => {
            return selectedAnswers[index] === question.correctAnswer ? count + 1 : count;
        }, 0);

        return {
            correct,
            total: content.quiz.length,
            percentage: Math.round((correct / content.quiz.length) * 100),
        };
    }, [content.quiz, quizSubmitted, selectedAnswers]);

    return (
        <Tabs defaultValue="konten" className="flex-1 flex flex-col overflow-hidden w-full">
            <div className="flex w-full justify-center border-b px-6 pt-4">
                <TabsList>
                    <TabsTrigger value="konten">Konten</TabsTrigger>
                    <TabsTrigger value="video">Video</TabsTrigger>
                    <TabsTrigger value="kuis">Kuis</TabsTrigger>
                </TabsList>
            </div>

            <TabsContent value="konten" className="flex-1 overflow-y-auto p-6 space-y-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <h4 className="text-base font-medium text-muted-foreground">
                    Memahami {title}: Dasar-Dasar Elektronika
                </h4>
                <p className="text-sm leading-relaxed">{content.description}</p>

                <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900" />
                    <div className="relative z-10 text-center text-white">
                        <div className="text-yellow-400 text-2xl font-bold mb-2">DASAR</div>
                        <div className="text-xl font-bold">ANALOGI TEGANGAN</div>
                        <div className="mt-4 bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                            <div className="w-0 h-0 border-l-8 border-r-0 border-t-6 border-b-6 border-l-white border-t-transparent border-b-transparent ml-1" />
                        </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-sm flex items-center gap-2">
                        R <span className="text-blue-300">→</span> I
                    </div>
                </div>

                <p className="text-sm text-muted-foreground">
                    Penjelasan lengkap tentang {title} dengan contoh aplikasi sehari-hari.
                </p>
            </TabsContent>

            <TabsContent value="video" className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">{content.videoTitle || `Video ${title}`}</h3>
                    <p className="text-sm text-muted-foreground">
                        {content.videoDescription || `Video pembelajaran tentang ${title}`}
                    </p>

                    <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900" />
                        <div className="relative z-10 text-center text-white">
                            <div className="text-yellow-400 text-2xl font-bold mb-2">DASAR</div>
                            <div className="text-xl font-bold">ANALOGI TEGANGAN</div>
                            <div className="mt-4 bg-red-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto cursor-pointer hover:bg-red-700 transition-colors">
                                <div className="w-0 h-0 border-l-10 border-r-0 border-t-8 border-b-8 border-l-white border-t-transparent border-b-transparent ml-1" />
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-sm flex items-center gap-2">
                            R <span className="text-blue-300">→</span> I
                        </div>
                    </div>
                </div>
            </TabsContent>

            <TabsContent value="kuis" className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Kuis {title}</h3>
                        {quizSubmitted && results && (
                            <div className="text-sm font-medium">
                                Nilai: {results.correct}/{results.total} ({results.percentage}%)
                            </div>
                        )}
                    </div>

                    {quizSubmitted && results ? (
                        <div className="space-y-6">
                            <div className="bg-muted/50 rounded-lg p-6 text-center">
                                <div className="text-2xl font-bold mb-2">
                                    {results.percentage >= 70 ? (
                                        <span className="text-green-600">Selamat! 🎉</span>
                                    ) : (
                                        <span className="text-orange-600">Coba Lagi! 💪</span>
                                    )}
                                </div>
                                <div className="text-lg mb-4">
                                    Anda menjawab benar {results.correct} dari {results.total} soal ({results.percentage}%)
                                </div>
                                <Button onClick={handleRetakeQuiz} className="bg-circuit-blue hover:bg-circuit-blue/90 text-white">
                                    <RotateCcw className="w-4 h-4 mr-2" />
                                    Ulangi Kuis
                                </Button>
                            </div>

                            {content.quiz.map((question, questionIndex) => {
                                const userAnswer = selectedAnswers[questionIndex];
                                const isCorrect = userAnswer === question.correctAnswer;

                                return (
                                    <div key={questionIndex} className="space-y-3 border rounded-lg p-4">
                                        <div className="flex items-start gap-2">
                                            {isCorrect ? (
                                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                                            ) : (
                                                <XCircle className="w-5 h-5 text-red-600 mt-1 shrink-0" />
                                            )}
                                            <h4 className="font-medium">
                                                {questionIndex + 1}. {question.question}
                                            </h4>
                                        </div>

                                        <div className="space-y-2 pl-7">
                                            {question.options.map((option, optionIndex) => {
                                                let className = "w-full text-left p-3 rounded-lg border transition-colors text-sm ";

                                                if (optionIndex === question.correctAnswer) {
                                                    className += "border-green-500 bg-green-50 text-green-700";
                                                } else if (optionIndex === userAnswer && !isCorrect) {
                                                    className += "border-red-500 bg-red-50 text-red-700";
                                                } else {
                                                    className += "border-border bg-muted/20";
                                                }

                                                return (
                                                    <div key={optionIndex} className={className}>
                                                        {String.fromCharCode(65 + optionIndex)}. {option}
                                                        {optionIndex === question.correctAnswer && (
                                                            <span className="ml-2 text-green-600 font-medium">✓ Jawaban Benar</span>
                                                        )}
                                                        {optionIndex === userAnswer && !isCorrect && (
                                                            <span className="ml-2 text-red-600 font-medium">✗ Jawaban Anda</span>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : currentQuestion ? (
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-muted-foreground text-center">
                                    Pertanyaan {currentQuestionIndex + 1} dari {content.quiz.length}
                                </p>
                                <Progress value={((currentQuestionIndex + 1) / content.quiz.length) * 100} className="w-full" />
                            </div>

                            <div className="space-y-3 p-4 border rounded-lg bg-background">
                                <h4 className="font-medium text-base leading-relaxed">{currentQuestion.question}</h4>

                                <div className="space-y-2 pt-2">
                                    {currentQuestion.options.map((option, optionIndex) => (
                                        <button
                                            key={optionIndex}
                                            onClick={() => handleAnswerSelect(currentQuestionIndex, optionIndex)}
                                            className={`w-full text-left p-3 rounded-lg border transition-colors text-sm ${
                                                selectedAnswers[currentQuestionIndex] === optionIndex
                                                    ? "border-primary bg-primary/10 text-primary font-medium"
                                                    : "border-border bg-muted/30 hover:bg-muted"
                                            }`}
                                        >
                                            <span
                                                className={`mr-2 font-bold ${
                                                    selectedAnswers[currentQuestionIndex] === optionIndex
                                                        ? "text-primary"
                                                        : "text-muted-foreground"
                                                }`}
                                            >
                                                {String.fromCharCode(65 + optionIndex)}.
                                            </span>
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between items-center pt-4">
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                                    disabled={currentQuestionIndex === 0}
                                >
                                    <ChevronLeft className="w-4 h-4 mr-2" />
                                    Sebelumnya
                                </Button>

                                {currentQuestionIndex < content.quiz.length - 1 ? (
                                    <Button
                                        onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                                        className="bg-circuit-blue hover:bg-circuit-blue/90 text-white"
                                    >
                                        Selanjutnya
                                        <ChevronRight className="w-4 h-4 ml-2" />
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleSubmitQuiz}
                                        disabled={Object.keys(selectedAnswers).length !== content.quiz.length}
                                        className="bg-circuit-green hover:bg-circuit-green/90 text-white disabled:bg-circuit-green/50 disabled:cursor-not-allowed"
                                    >
                                        <CheckCircle className="w-4 h-4 mr-2" />
                                        Kirim Jawaban
                                    </Button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-10 text-muted-foreground">
                            Tidak ada kuis untuk materi ini.
                        </div>
                    )}
                </div>
            </TabsContent>
        </Tabs>
    );
}
