import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SimulationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText?: string;
  onClick?: () => void;
  isEmpty?: boolean;
}

export function SimulationCard({ 
  title, 
  description, 
  icon: Icon, 
  buttonText, 
  onClick,
  isEmpty = false
}: SimulationCardProps) {
  return (
    <Card className="h-full shadow-card hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        
        {isEmpty ? (
          <div className="h-48 bg-muted rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-12 h-12 text-muted-foreground" />
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-circuit-blue/10 to-circuit-blue/5 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-circuit-blue/5"></div>
            <div className="relative">
              <Icon className="w-12 h-12 text-circuit-blue" />
            </div>
          </div>
        )}
        
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        {buttonText && (
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={onClick}
          >
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
