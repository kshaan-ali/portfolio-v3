import { 
  Blocks, 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Lock, 
  Layers, 
  Wallet,
  FileCode,
  Server,
  Braces,
  GitBranch
} from "lucide-react";
import { SkillCard } from "./SkillCard";

const skills = [
  {
    icon: Blocks,
    name: "Solidity",
    level: 95,
    tier: "master" as const,
    description: "Smart contract development, ERC standards, DeFi protocols",
  },
  {
    icon: Wallet,
    name: "Web3.js / Ethers",
    level: 92,
    tier: "master" as const,
    description: "Blockchain integration, wallet connectivity, transaction handling",
  },
  {
    icon: Code2,
    name: "React / Next.js",
    level: 90,
    tier: "expert" as const,
    description: "Modern frontend development, SSR, component architecture",
  },
  {
    icon: FileCode,
    name: "TypeScript",
    level: 88,
    tier: "expert" as const,
    description: "Type-safe development, generics, advanced patterns",
  },
  {
    icon: Server,
    name: "Node.js",
    level: 85,
    tier: "expert" as const,
    description: "Backend APIs, microservices, real-time applications",
  },
  {
    icon: Database,
    name: "PostgreSQL / MongoDB",
    level: 82,
    tier: "advanced" as const,
    description: "Database design, optimization, data modeling",
  },
  {
    icon: Lock,
    name: "Smart Contract Security",
    level: 88,
    tier: "master" as const,
    description: "Auditing, vulnerability detection, best practices",
  },
  {
    icon: Layers,
    name: "Layer 2 Solutions",
    level: 80,
    tier: "advanced" as const,
    description: "Polygon, Arbitrum, Optimism integration",
  },
  {
    icon: Cpu,
    name: "Hardhat / Foundry",
    level: 85,
    tier: "expert" as const,
    description: "Testing, deployment, contract verification",
  },
  {
    icon: Globe,
    name: "IPFS / Arweave",
    level: 78,
    tier: "advanced" as const,
    description: "Decentralized storage, NFT metadata, content addressing",
  },
  {
    icon: Braces,
    name: "GraphQL / The Graph",
    level: 75,
    tier: "advanced" as const,
    description: "Subgraph development, blockchain data indexing",
  },
  {
    icon: GitBranch,
    name: "Git / CI/CD",
    level: 85,
    tier: "expert" as const,
    description: "Version control, automated pipelines, deployment",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-cyber">Tech</span>{" "}
            <span className="text-foreground">Stack</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies powering the decentralized future
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
