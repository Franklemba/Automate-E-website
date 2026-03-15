import { motion } from "framer-motion";
import iconElectrification from "@/assets/icon-electrification.png";
import iconWater from "@/assets/icon-water.png";
import iconEnergy from "@/assets/icon-energy.png";

const clients = [
  {
    name: "Rural Electrification Authority",
    desc: "Implemented enterprise ERP capabilities to improve financial visibility, procurement processes, and project oversight.",
    icon: iconElectrification,
  },
  {
    name: "Nkana Water and Sanitation Company",
    desc: "Implemented Automate E to strengthen billing systems, operational management, and infrastructure project monitoring.",
    icon: iconWater,
  },
  {
    name: "Northwestern Energy Corporation",
    desc: "Implemented Automate E to manage energy sector operations, financial reporting, and asset management.",
    icon: iconEnergy,
  },
];

const ClientsSection = () => (
  <section id="clients" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Organizations That Trust{" "}
        <span className="text-gradient-primary">Automate E</span>
      </motion.h2>
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {clients.map((c, i) => (
          <motion.div
            key={c.name}
            className="bg-card rounded-2xl p-8 shadow-card text-center hover:shadow-elevated transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <div className="w-24 h-24 mx-auto mb-4">
              <img src={c.icon} alt={c.name} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{c.name}</h3>
            <p className="text-sm text-muted-foreground font-body">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
