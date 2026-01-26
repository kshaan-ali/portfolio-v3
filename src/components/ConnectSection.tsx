import { Mail, Github, Linkedin, Twitter, Send, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export const ConnectSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="connect" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-cyber">Let's</span>{" "}
            <span className="text-foreground">Connect</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to build the decentralized future? Let's collaborate on your next Web3 project.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="cyber-card p-8 border border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h3 className="font-display text-xl font-bold text-foreground">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body text-foreground"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body text-foreground"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body text-foreground resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button type="submit" variant="cyber" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email Card */}
            <div className="cyber-card p-6 border border-border hover:border-primary transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-foreground">Email Me</h4>
                  <a
                    href="mailto:developer@blockchain.dev"
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    developer@blockchain.dev
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="cyber-card p-6 border border-border">
              <h4 className="font-display text-lg font-bold text-foreground mb-4">Follow My Work</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="cyber-card p-6 border border-secondary/30 bg-gradient-to-br from-secondary/10 to-neon-purple/10">
              <h4 className="font-display text-lg font-bold text-foreground mb-2">
                Available for Projects
              </h4>
              <p className="font-body text-muted-foreground mb-4">
                Currently accepting new Web3 projects and collaborations. Let's build something revolutionary!
              </p>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-matrix animate-pulse" />
                <span className="font-body text-sm font-semibold text-matrix">Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
