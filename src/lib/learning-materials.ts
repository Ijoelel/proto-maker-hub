import { Battery, GitBranch, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type MaterialSlug = "rangkaian-listrik" | "hukum-ohm" | "hukum-kirchoff";

type IconColor = "blue" | "green" | "purple" | "orange";

export interface LearningMaterialQuizQuestion {
    question: string;
    options: string[];
    correctAnswer: number;
}

export interface LearningMaterialDetail {
    description: string;
    videoTitle?: string;
    videoDescription?: string;
    quiz: LearningMaterialQuizQuestion[];
}

export interface LearningMaterial {
    title: string;
    slug: MaterialSlug;
    description: string;
    icon: LucideIcon;
    iconColor: IconColor;
    buttonText: string;
    detail: LearningMaterialDetail;
}

export const learningMaterials: LearningMaterial[] = [
    {
        title: "Rangkaian Listrik",
        slug: "rangkaian-listrik",
        description:
            "Pengenalan rangkaian listrik, jenis-jenis rangkaian, dan karakteristiknya.",
        icon: Zap,
        iconColor: "blue",
        buttonText: "Buka Materi",
        detail: {
            description:
                "Rangkaian listrik adalah jalur tertutup yang memungkinkan arus listrik mengalir. Dalam rangkaian listrik, komponen-komponen elektronik seperti resistor, kapasitor, dan induktor terhubung satu sama lain untuk membentuk jalur yang memungkinkan aliran elektron. Pemahaman tentang rangkaian listrik sangat penting dalam dunia elektronika.",
            quiz: [
                {
                    question: "Apa yang dimaksud dengan rangkaian listrik?",
                    options: [
                        "Jalur terbuka untuk arus listrik",
                        "Jalur tertutup untuk arus listrik",
                        "Komponen elektronik",
                        "Sumber tegangan",
                    ],
                    correctAnswer: 1,
                },
                {
                    question: "Komponen apa yang digunakan untuk membatasi arus dalam rangkaian?",
                    options: ["Kapasitor", "Resistor", "Induktor", "Dioda"],
                    correctAnswer: 1,
                },
                {
                    question: "Apa fungsi utama sumber tegangan dalam rangkaian listrik?",
                    options: [
                        "Menyimpan energi",
                        "Memberikan energi listrik",
                        "Membatasi arus",
                        "Mengatur frekuensi",
                    ],
                    correctAnswer: 1,
                },
                {
                    question: "Dalam rangkaian seri, arus yang mengalir adalah...",
                    options: [
                        "Berbeda di setiap komponen",
                        "Sama di semua komponen",
                        "Nol",
                        "Tergantung resistansi",
                    ],
                    correctAnswer: 1,
                },
                {
                    question: "Dalam rangkaian paralel, tegangan adalah...",
                    options: [
                        "Berbeda di setiap cabang",
                        "Sama di semua cabang",
                        "Nol",
                        "Tergantung arus",
                    ],
                    correctAnswer: 1,
                },
                {
                    question: "Apa yang terjadi jika ada satu komponen rusak dalam rangkaian seri?",
                    options: [
                        "Komponen lain tetap bekerja",
                        "Semua komponen mati",
                        "Arus meningkat",
                        "Tidak ada efek",
                    ],
                    correctAnswer: 1,
                },
                {
                    question: "Ground dalam rangkaian listrik berfungsi sebagai...",
                    options: [
                        "Sumber tegangan",
                        "Referensi tegangan nol",
                        "Penghambat arus",
                        "Penyimpan energi",
                    ],
                    correctAnswer: 1,
                },
                {
                    question: "Simbol mana yang mewakili resistor dalam diagram rangkaian?",
                    options: ["Lingkaran", "Zigzag", "Garis lurus", "Segitiga"],
                    correctAnswer: 1,
                },
                {
                    question: "Apa yang dimaksud dengan short circuit?",
                    options: [
                        "Rangkaian terbuka",
                        "Hubungan langsung tanpa hambatan",
                        "Rangkaian normal",
                        "Rangkaian dengan resistor tinggi",
                    ],
                    correctAnswer: 1,
                },
                {
                    question: "Node dalam rangkaian listrik adalah...",
                    options: ["Titik percabangan", "Komponen aktif", "Sumber energi", "Ground"],
                    correctAnswer: 0,
                },
            ],
        },
    },
    {
        title: "Hukum Ohm",
        slug: "hukum-ohm",
        description:
            "Memahami hubungan antara tegangan, arus, dan hambatan.",
        icon: Battery,
        iconColor: "green",
        buttonText: "Buka Materi",
        detail: {
            description:
                "Hukum Ohm adalah salah satu prinsip paling fundamental dalam dunia elektronika. Dengan memahami hukum ini, Anda akan bisa merancang, menganalisis, dan memecahkan berbagai rangkaian listrik sederhana.",
            quiz: [
                {
                    question: "Rumus Hukum Ohm adalah...",
                    options: ["V = I × R", "I = V × R", "R = V × I", "P = V × I"],
                    correctAnswer: 0,
                },
                {
                    question: "Jika tegangan 12V dan resistansi 4Ω, berapa arus yang mengalir?",
                    options: ["3A", "48A", "8A", "16A"],
                    correctAnswer: 0,
                },
                {
                    question: "Jika arus 2A mengalir melalui resistor 10Ω, berapa tegangannya?",
                    options: ["5V", "20V", "12V", "8V"],
                    correctAnswer: 1,
                },
                {
                    question: "Hubungan antara arus dan tegangan pada resistansi tetap adalah...",
                    options: [
                        "Berbanding terbalik",
                        "Berbanding lurus",
                        "Tidak ada hubungan",
                        "Eksponensial",
                    ],
                    correctAnswer: 1,
                },
                {
                    question: "Satuan resistansi dalam SI adalah...",
                    options: ["Ampere", "Volt", "Ohm", "Watt"],
                    correctAnswer: 2,
                },
                {
                    question: "Jika resistansi naik 2 kali dengan tegangan tetap, arus akan...",
                    options: ["Naik 2 kali", "Turun setengah", "Tetap", "Naik 4 kali"],
                    correctAnswer: 1,
                },
                {
                    question: "Konduktansi adalah kebalikan dari...",
                    options: ["Arus", "Tegangan", "Resistansi", "Daya"],
                    correctAnswer: 2,
                },
                {
                    question: "Satuan konduktansi adalah...",
                    options: ["Ohm", "Siemens", "Ampere", "Volt"],
                    correctAnswer: 1,
                },
                {
                    question: "Hukum Ohm berlaku untuk...",
                    options: [
                        "Semua material",
                        "Material ohmic saja",
                        "Semikonduktor saja",
                        "Logam saja",
                    ],
                    correctAnswer: 1,
                },
                {
                    question: "Resistor 100Ω dengan arus 0.5A akan menghasilkan daya...",
                    options: ["25W", "50W", "200W", "100W"],
                    correctAnswer: 0,
                },
            ],
        },
    },
    {
        title: "Hukum Kirchoff",
        slug: "hukum-kirchoff",
        description:
            "Hukum Kirchoff tentang arus dan tegangan dalam rangkaian.",
        icon: GitBranch,
        iconColor: "purple",
        buttonText: "Buka Materi",
        detail: {
            description:
                "Hukum Kirchoff terdiri dari dua hukum dasar yang sangat penting dalam analisis rangkaian listrik. Hukum pertama tentang arus (KCL) dan hukum kedua tentang tegangan (KVL) membantu kita memahami bagaimana arus dan tegangan bekerja dalam rangkaian kompleks.",
            quiz: [
                {
                    question: "Hukum Kirchoff tentang arus (KCL) menyatakan bahwa...",
                    options: [
                        "Jumlah arus masuk sama dengan arus keluar",
                        "Arus selalu konstan",
                        "Tegangan selalu sama",
                        "Resistansi bertambah",
                    ],
                    correctAnswer: 0,
                },
                {
                    question: "Hukum Kirchoff tentang tegangan (KVL) menyatakan bahwa...",
                    options: [
                        "Tegangan di semua cabang sama",
                        "Jumlah tegangan dalam loop tertutup = 0",
                        "Tegangan selalu positif",
                        "Tegangan berbanding lurus dengan arus",
                    ],
                    correctAnswer: 1,
                },
                {
                    question: "KCL diterapkan pada...",
                    options: ["Loop", "Node/titik percabangan", "Resistor", "Sumber tegangan"],
                    correctAnswer: 1,
                },
                {
                    question: "KVL diterapkan pada...",
                    options: ["Node", "Loop tertutup", "Resistor tunggal", "Sumber arus"],
                    correctAnswer: 1,
                },
                {
                    question: "Jika 3A masuk ke node dan 1A keluar, berapa arus yang harus keluar lagi?",
                    options: ["1A", "2A", "3A", "4A"],
                    correctAnswer: 1,
                },
                {
                    question: "Dalam loop dengan tegangan sumber 12V dan drop tegangan resistor 5V dan 7V, hasil KVL adalah...",
                    options: ["12V", "0V", "5V", "-12V"],
                    correctAnswer: 1,
                },
                {
                    question: "Tanda tegangan dalam KVL ditentukan oleh...",
                    options: [
                        "Nilai resistor",
                        "Arah loop yang dipilih",
                        "Besarnya arus",
                        "Jenis sumber",
                    ],
                    correctAnswer: 1,
                },
                {
                    question: "KCL berdasarkan pada hukum kekekalan...",
                    options: ["Energi", "Muatan", "Momentum", "Massa"],
                    correctAnswer: 1,
                },
                {
                    question: "KVL berdasarkan pada hukum kekekalan...",
                    options: ["Muatan", "Energi", "Arus", "Resistansi"],
                    correctAnswer: 1,
                },
                {
                    question: "Metode analisis rangkaian yang menggunakan KCL dan KVL adalah...",
                    options: ["Metode Mesh", "Metode Node", "Superposisi", "Semua benar"],
                    correctAnswer: 3,
                },
            ],
        },
    },
];

export const materialMap: Record<MaterialSlug, LearningMaterial> = learningMaterials.reduce(
    (acc, material) => {
        acc[material.slug] = material;
        return acc;
    },
    {} as Record<MaterialSlug, LearningMaterial>,
);

export function findMaterialBySlug(slug?: string | null): LearningMaterial | undefined {
    if (!slug) {
        return undefined;
    }
    return learningMaterials.find((material) => material.slug === slug);
}
