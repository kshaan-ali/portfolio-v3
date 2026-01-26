import { GraduationCap, BookOpen, Trophy } from "lucide-react";

const qualifications = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    year: "2019",
    specialization: "Distributed Systems & Cryptography",
    icon: GraduationCap,
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "MIT",
    year: "2017",
    specialization: "Full Stack Development",
    icon: BookOpen,
  },
];

const achievements = [
  "Published research on blockchain scalability",
  "Dean's List - All semesters",
  "Hackathon Winner - ETHGlobal 2022",
  "Open source contributor - 500+ GitHub stars",
];

export const QualificationsSection = () => {
  return (
    <section id="qualifications" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Training</span>{" "}
            <span className="text-gradient-royal">Grounds</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundations that forged my expertise in technology and blockchain
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {qualifications.map((qual, index) => (
              <div
                key={index}
                className="game-card p-6 border-2 border-royal/30 hover:border-royal transition-all duration-300 hover:shadow-[0_0_30px_hsl(217_91%_60%_/_0.2)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-royal/20 to-epic/20 flex items-center justify-center shrink-0">
                    <qual.icon className="w-7 h-7 text-royal" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {qual.degree}
                    </h3>
                    <p className="font-body text-primary font-semibold mb-2">{qual.institution}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-muted text-xs font-body font-semibold text-muted-foreground">
                        {qual.year}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-royal/20 text-xs font-body font-semibold text-royal">
                        {qual.specialization}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="game-card p-8 border-2 border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-primary" />
              <h3 className="font-display text-xl font-bold text-gradient-gold">Notable Achievements</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="font-body text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
