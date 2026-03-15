import logo from "@/assets/automate-e-logo.png";
import idLogo from "@/assets/innovative-dynamics-logo.png";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 text-background/80">
        <div>
          <img src={logo} alt="Automate E" className="h-8 mb-3 brightness-200" />
          <p className="text-sm font-body">
            Developed by <strong className="text-background">Innovative Dynamics LTD</strong>
          </p>
        </div>
        <div>
          <h4 className="font-bold text-background mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Features", "Clients", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-secondary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-background mb-3">Contact</h4>
          <p className="text-sm">WhatsApp: 0771493040</p>
          <p className="text-sm">Email: marketing@innovativedynamics.com</p>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-background/10 text-center">
        <div className="flex flex-col items-center gap-3 mb-4">
          <img src={idLogo} alt="Innovative Dynamics" className="h-16 object-contain brightness-200" />
          <p className="text-sm text-background/70 font-body">Powered by <strong className="text-background">Innovative Dynamics</strong></p>
        </div>
        <p className="text-sm text-background/50">
          © {new Date().getFullYear()} Automate E — Innovative Dynamics LTD. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
