import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Senior Blockchain Developer",
    company: "DeFi Protocol Labs",
    location: "Remote",
    period: "2022 - Present",
    description: "Leading smart contract development for a multi-chain DeFi protocol. Architected and deployed yield farming contracts managing $50M+ TVL.",
    achievements: [
      "Reduced gas costs by 40% through optimization",
      "Led security audit preparation",
      "Mentored team of 5 developers",
    ],
    type: "legendary",
  },
  {
    title: "Full Stack Web3 Developer",
    company: "NFT Marketplace Inc",
    location: "San Francisco, CA",
    period: "2021 - 2022",
    description: "Built end-to-end NFT marketplace with React frontend and Solidity backend. Integrated multiple wallet providers and layer 2 solutions.",
    achievements: [
      "Launched marketplace with 100k+ users",
      "Implemented lazy minting feature",
      "Built real-time bidding system",
    ],
    type: "epic",
  },
  {
    title: "Blockchain Developer",
    company: "Crypto Startup Studio",
    location: "New York, NY",
    period: "2020 - 2021",
    description: "Developed smart contracts for various token launches and DeFi applications. Created reusable contract libraries.",
    achievements: [
      "Deployed 20+ production contracts",
      "Built token vesting system",
      "Created staking rewards platform",
    ],
    type: "rare",
  },
  {
    title: "Junior Full Stack Developer",
    company: "Tech Agency Co",
    location: "Boston, MA",
    period: "2019 - 2020",
    description: "Started career building web applications with React and Node.js. Transitioned into blockchain development.",
    achievements: [
      "Built 10+ client projects",
      "Learned Solidity fundamentals",
      "First smart contract deployment",
    ],
    type: "common",
  },
];

const typeStyles = {
  legendary: {
    border: "border-l-primary",
    dot: "bg-primary shadow-[0_0_10px_hsl(45_100%_50%)]",
  },
  epic: {
    border: "border-l-epic",
    dot: "bg-epic shadow-[0_0_10px_hsl(280_100%_65%)]",
  },
  rare: {
    border: "border-l-rare",
    dot: "bg-rare shadow-[0_0_10px_hsl(200_100%_50%)]",
  },
  common: {
    border: "border-l-common",
    dot: "bg-common",
  },
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Battle</span>{" "}
            <span className="text-gradient-royal">History</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A chronicle of my journey through the realms of technology and blockchain
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const styles = typeStyles[exp.type as keyof typeof typeStyles];
            return (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-border" />
                )}

                {/* Timeline Dot */}
                <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full ${styles.dot} border-4 border-background`} />

                {/* Content Card */}
                <div className={`game-card p-6 border-l-4 ${styles.border} ml-4`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="font-body text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-body">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="font-body">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-muted-foreground mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 font-body text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
