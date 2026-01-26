import { Award, ExternalLink, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    name: "Ethereum : Dapp Development Bootcamp",
    issuer: "Udemy",
    year: "2024",
    tier: "master",
    credentialId: "UC-0ebbf8b8-c84f-4c4d-b80d-9146ae33337a",
  },
  {
    name: "0-100 Full Stack Web Development Course",
    issuer: "100xDevs",
    year: "2024",
    tier: "master",
    credentialId: "KC21ZIYY",
  },
  // {
  //   name: "Smart Contract Security Auditor",
  //   issuer: "OpenZeppelin",
  //   year: "2022",
  //   tier: "expert",
  //   credentialId: "OZ-SEC-1122",
  // },
  // {
  //   name: "Solidity Professional Certificate",
  //   issuer: "Alchemy University",
  //   year: "2022",
  //   tier: "expert",
  //   credentialId: "AU-SOL-5567",
  // },
  // {
  //   name: "AWS Certified Developer",
  //   issuer: "Amazon Web Services",
  //   year: "2021",
  //   tier: "advanced",
  //   credentialId: "AWS-DEV-9901",
  // },
  // {
  //   name: "Full Stack Web Development",
  //   issuer: "Meta",
  //   year: "2021",
  //   tier: "advanced",
  //   credentialId: "META-FS-3344",
  // },
];

const tierStyles = {
  master: {
    bg: "bg-gradient-to-br from-primary/20 to-secondary/20",
    border: "border-primary/50 hover:border-primary",
    icon: "text-primary",
    glow: "hover:shadow-[0_0_30px_hsl(180_100%_50%_/_0.3)]",
  },
  expert: {
    bg: "bg-gradient-to-br from-neon-purple/20 to-secondary/20",
    border: "border-neon-purple/50 hover:border-neon-purple",
    icon: "text-neon-purple",
    glow: "hover:shadow-[0_0_25px_hsl(280_100%_65%_/_0.3)]",
  },
  advanced: {
    bg: "bg-gradient-to-br from-matrix/20 to-terminal/20",
    border: "border-matrix/50 hover:border-matrix",
    icon: "text-matrix",
    glow: "hover:shadow-[0_0_20px_hsl(120_100%_45%_/_0.3)]",
  },
};

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-cyber">Verified</span>{" "}
            <span className="text-foreground">Credentials</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating blockchain expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const styles = tierStyles[cert.tier as keyof typeof tierStyles];
            return (
              <div
                key={index}
                className={`cyber-card p-6 border transition-all duration-300 hover:scale-105 cursor-pointer ${styles.border} ${styles.glow}`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg ${styles.bg} flex items-center justify-center mb-4`}>
                  <Award className={`w-7 h-7 ${styles.icon}`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{cert.name}</h3>
                <p className="font-body text-sm text-primary font-semibold mb-3">{cert.issuer}</p>

                {/* Details */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-matrix" />
                    <span className="font-body">{cert.year}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                    <span className="font-body text-xs">{cert.credentialId}</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
