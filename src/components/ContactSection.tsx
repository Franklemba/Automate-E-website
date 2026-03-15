import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", organization: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name} - ${form.organization}`);
    const body = encodeURIComponent(`Name: ${form.name}\nOrganization: ${form.organization}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`);
    window.location.href = `mailto:marketing@innovativedynamics.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening email client...", description: "Your message details have been pre-filled." });
  };

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Start Your <span className="text-gradient-primary">Digital Transformation</span> Today
        </motion.h2>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button asChild size="lg">
            <a href="https://wa.me/260771493040" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="mailto:marketing@innovativedynamics.com">
              <Mail className="mr-2 h-5 w-5" /> Email Us
            </a>
          </Button>
        </div>
        <motion.form
          className="mt-12 max-w-xl mx-auto bg-card rounded-2xl p-8 shadow-card space-y-4"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <Input placeholder="Organization" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </div>
          <Textarea placeholder="Your message..." rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <Button type="submit" className="w-full" size="lg">Send Message</Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
