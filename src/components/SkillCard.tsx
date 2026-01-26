import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: number;
  rarity: "common" | "rare" | "epic" | "legendary";
  description: string;
}

const rarityStyles = {
  common: {
    border: "border-common/50",
    glow: "hover:shadow-[0_0_20px_hsl(220_10%_50%_/_0.3)]",
    badge: "bg-common text-foreground",
    label: "Common",
  },
  rare: {
    border: "border-rare/50",
    glow: "hover:shadow-[0_0_25px_hsl(200_100%_50%_/_0.4)]",
    badge: "bg-rare text-foreground",
    label: "Rare",
  },
  epic: {
    border: "border-epic/50",
    glow: "hover:shadow-[0_0_30px_hsl(280_100%_65%_/_0.4)]",
    badge: "bg-epic text-foreground",
    label: "Epic",
  },
  legendary: {
    border: "border-primary/50",
    glow: "hover:shadow-[0_0_35px_hsl(45_100%_50%_/_0.5)]",
    badge: "bg-gradient-to-r from-gold to-legendary text-primary-foreground",
    label: "Legendary",
  },
};

export const SkillCard = ({ icon: Icon, name, level, rarity, description }: SkillCardProps) => {
  const styles = rarityStyles[rarity];

  return (
    <div
      className={cn(
        "game-card group p-6 border-2 transition-all duration-300 hover:scale-105 cursor-pointer",
        styles.border,
        styles.glow
      )}
    >
      {/* Shine Effect */}
      <div className="card-shine" />

      {/* Rarity Badge */}
      <div className={cn("absolute top-3 right-3 px-2 py-1 rounded text-xs font-bold uppercase", styles.badge)}>
        {styles.label}
      </div>

      {/* Icon */}
      <div className="relative mb-4">
        <div
          className={cn(
            "w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
            rarity === "legendary" ? "bg-gradient-to-br from-gold/20 to-legendary/20" :
            rarity === "epic" ? "bg-gradient-to-br from-royal/20 to-epic/20" :
            rarity === "rare" ? "bg-rare/20" : "bg-common/20"
          )}
        >
          <Icon className={cn(
            "w-8 h-8",
            rarity === "legendary" ? "text-primary" :
            rarity === "epic" ? "text-epic" :
            rarity === "rare" ? "text-rare" : "text-common"
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
          <span className="font-body text-xs text-muted-foreground uppercase">Mastery</span>
          <span className="font-body text-xs font-bold text-foreground">{level}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-1000",
              rarity === "legendary" ? "bg-gradient-to-r from-gold to-legendary" :
              rarity === "epic" ? "bg-gradient-to-r from-royal to-epic" :
              rarity === "rare" ? "bg-rare" : "bg-common"
            )}
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
};
