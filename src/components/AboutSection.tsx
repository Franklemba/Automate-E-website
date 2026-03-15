import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Reduces manual work",
  "Improves accuracy",
  "Increases transparency",
  "Provides real-time reporting",
  "Enables faster data-driven decisions",
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About <span className="text-gradient-primary">Automate E</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-muted-foreground font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Automate E is an integrated ERP platform designed to bring all key departments into one system. Instead of managing separate systems, Automate E connects everything into one digital ecosystem.
        </motion.p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b}
            className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm font-medium text-foreground">{b}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
