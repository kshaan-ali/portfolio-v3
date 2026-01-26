import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: number;
  tier: "core" | "advanced" | "expert" | "master";
  description: string;
}

const tierStyles = {
  core: {
    border: "border-terminal/50",
    glow: "hover:shadow-[0_0_20px_hsl(200_100%_50%_/_0.3)]",
    badge: "bg-terminal text-foreground",
    label: "Core",
  },
  advanced: {
    border: "border-matrix/50",
    glow: "hover:shadow-[0_0_25px_hsl(120_100%_45%_/_0.4)]",
    badge: "bg-matrix text-primary-foreground",
    label: "Advanced",
  },
  expert: {
    border: "border-neon-purple/50",
    glow: "hover:shadow-[0_0_30px_hsl(280_100%_65%_/_0.4)]",
    badge: "bg-neon-purple text-foreground",
    label: "Expert",
  },
  master: {
    border: "border-primary/50",
    glow: "hover:shadow-[0_0_35px_hsl(180_100%_50%_/_0.5)]",
    badge: "bg-gradient-to-r from-cyber to-neon-pink text-primary-foreground",
    label: "Master",
  },
};

export const SkillCard = ({ icon: Icon, name, level, tier, description }: SkillCardProps) => {
  const styles = tierStyles[tier];

  return (
    <div
      className={cn(
        "cyber-card group p-6 border transition-all duration-300 hover:scale-105 cursor-pointer",
        styles.border,
        styles.glow
      )}
    >
      {/* Shine Effect */}
      <div className="card-shine" />

      {/* Tier Badge */}
      <div className={cn("absolute top-3 right-3 px-2 py-1 rounded text-xs font-bold uppercase", styles.badge)}>
        {styles.label}
      </div>

      {/* Icon */}
      <div className="relative mb-4">
        <div
          className={cn(
            "w-16 h-16 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
            tier === "master" ? "bg-gradient-to-br from-primary/20 to-secondary/20" :
            tier === "expert" ? "bg-gradient-to-br from-neon-purple/20 to-secondary/20" :
            tier === "advanced" ? "bg-matrix/20" : "bg-terminal/20"
          )}
        >
          <Icon className={cn(
            "w-8 h-8",
            tier === "master" ? "text-primary" :
            tier === "expert" ? "text-neon-purple" :
            tier === "advanced" ? "text-matrix" : "text-terminal"
          )} />
        </div>
      </div>

      {/* Name */}
      <h3 className="font-display text-xl font-bold text-foreground mb-2">{name}</h3>

      {/* Description */}
      <p className="font-body text-sm text-muted-foreground mb-4">{description}</p>

      {/* Level Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-body text-xs text-muted-foreground uppercase">Proficiency</span>
          <span className="font-body text-xs font-bold text-foreground">{level}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-1000",
              tier === "master" ? "bg-gradient-to-r from-cyber to-neon-pink" :
              tier === "expert" ? "bg-gradient-to-r from-neon-purple to-secondary" :
              tier === "advanced" ? "bg-matrix" : "bg-terminal"
            )}
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
};
