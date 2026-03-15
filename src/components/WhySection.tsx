import { motion } from "framer-motion";
import { Layers, BarChart3, ShieldCheck, Eye, Expand, Zap } from "lucide-react";

const reasons = [
  { icon: Layers, label: "One integrated platform" },
  { icon: BarChart3, label: "Real-time data visibility" },
  { icon: ShieldCheck, label: "Strong financial governance" },
  { icon: Eye, label: "Transparent procurement processes" },
  { icon: Expand, label: "Scalable enterprise architecture" },
  { icon: Zap, label: "Faster decision making" },
];

const WhySection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Why Organizations Choose{" "}
        <span className="text-gradient-primary">Automate E</span>
      </motion.h2>
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.label}
            className="flex items-center gap-4 bg-card p-5 rounded-xl shadow-card hover:shadow-elevated transition-all hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <r.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="font-semibold text-foreground">{r.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
