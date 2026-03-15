import { motion } from "framer-motion";
import iconFinancial from "@/assets/icon-financial.png";
import iconProcurement from "@/assets/icon-procurement.png";
import iconHR from "@/assets/icon-hr.png";
import iconProject from "@/assets/icon-project.png";

const modules = [
  {
    icon: iconFinancial,
    title: "Financial Management",
    items: ["Budget control", "General ledger", "Accounts payable & receivable", "Financial reporting"],
  },
  {
    icon: iconProcurement,
    title: "Procurement & Supply Chain",
    items: ["Purchase requests & approvals", "Vendor management", "Contract tracking", "Inventory management"],
  },
  {
    icon: iconHR,
    title: "Human Resources",
    items: ["Employee records", "Leave management", "Payroll integration", "Performance tracking"],
  },
  {
    icon: iconProject,
    title: "Project & Asset Management",
    items: ["Project budgeting", "Milestone tracking", "Asset lifecycle management", "Maintenance scheduling"],
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Key <span className="text-gradient-primary">Features</span>
      </motion.h2>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto font-body">
        Powerful modules designed to streamline every aspect of your organization.
      </p>
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((m, i) => (
          <motion.div
            key={m.title}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-20 h-20 mb-4">
              <img src={m.icon} alt={m.title} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">{m.title}</h3>
            <ul className="space-y-2">
              {m.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
