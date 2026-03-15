import { motion } from "framer-motion";
import iconCompliance from "@/assets/icon-compliance.png";

const ComplianceSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-elevated p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Compliance & Smart Invoicing
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Automate E integrates with digital tax systems including Zambia Revenue Authority Smart Invoice, allowing organizations to generate compliant digital invoices and streamline tax reporting.
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img src={iconCompliance} alt="Compliance & Smart Invoicing" className="w-48 h-48 object-contain" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ComplianceSection;
