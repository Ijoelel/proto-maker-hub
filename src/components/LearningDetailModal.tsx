import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { LearningMaterialDetail } from "@/lib/learning-materials";
import { LearningMaterialContent } from "./LearningMaterialContent";

interface LearningDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: LearningMaterialDetail;
}

export function LearningDetailModal({ isOpen, onClose, title, content }: LearningDetailModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
                <DialogHeader className="p-6 pb-2 border-b">
                    <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
                </DialogHeader>

                <LearningMaterialContent title={title} content={content} />
            </DialogContent>
        </Dialog>
    );
}
