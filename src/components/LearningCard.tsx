import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface LearningCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: "blue" | "green" | "purple" | "orange";
  buttonText: string;
  onClick?: () => void;
}

const iconColorClasses = {
  blue: "bg-circuit-blue text-white",
  green: "bg-circuit-green text-white", 
  purple: "bg-circuit-purple text-white",
  orange: "bg-circuit-orange text-white",
};

const buttonColorClasses = {
  blue: "bg-circuit-blue hover:bg-circuit-blue/90 text-white",
  green: "bg-circuit-green hover:bg-circuit-green/90 text-white",
  purple: "bg-circuit-purple hover:bg-circuit-purple/90 text-white", 
  orange: "bg-circuit-orange hover:bg-circuit-orange/90 text-white",
};

export function LearningCard({ 
  title, 
  description, 
  icon: Icon, 
  iconColor, 
  buttonText, 
  onClick 
}: LearningCardProps) {
  return (
    <Card className="h-full shadow-card hover:shadow-lg transition-shadow duration-200 bg-gradient-card">
      <CardContent className="p-6 flex flex-col items-center text-center h-full justify-between">
        <div className="space-y-4 flex-1 flex flex-col items-center justify-center">
          <div className={`w-16 h-16 rounded-full ${iconColorClasses[iconColor]} flex items-center justify-center`}>
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          </div>
        </div>
        <Button 
          className={`mt-6 ${buttonColorClasses[iconColor]} px-6 py-2`}
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}