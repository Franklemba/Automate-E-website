import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
    {/* Decorative circles */}
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />
    <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

    <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground">
            Run Your Entire Organization on{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              One Intelligent System.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-xl font-body">
            Automate E is an Enterprise Resource Planning system that connects finance, procurement, HR, projects, and reporting into one powerful digital platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="hero">
              <a href="https://wa.me/260771493040" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Talk to Us on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="hero-outline">
              <a href="mailto:marketing@innovativedynamics.com">
                <Mail className="mr-2 h-5 w-5" /> Email Our Team
              </a>
            </Button>
          </div>

          {/* Stats strip */}
          <motion.div
            className="mt-10 grid grid-cols-3 gap-6 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {[
              { value: "500+", label: "Users Active" },
              { value: "99.9%", label: "Uptime" },
              { value: "5+", label: "Organizations" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-secondary">{stat.value}</p>
                <p className="text-xs md:text-sm text-primary-foreground/70 font-body mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.img
            src={heroDashboard}
            alt="Automate E ERP Dashboard"
            className="w-full max-w-lg drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
