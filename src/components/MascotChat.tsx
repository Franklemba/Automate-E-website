import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import mascotImg from "@/assets/mascot-crossed.png";

const FAQ: Record<string, string> = {
  "what is automate e": "Automate E is an Enterprise Resource Planning (ERP) system developed by Innovative Dynamics LTD. It connects finance, procurement, HR, projects, and reporting into one powerful digital platform.",
  "what modules does it have": "Automate E includes: Financial Management, Procurement & Supply Chain, Human Resources, and Project & Asset Management modules.",
  "which organizations use automate e": "Organizations like the Rural Electrification Authority, Nkana Water and Sanitation Company, and Northwestern Energy Corporation trust Automate E.",
  "how can my company implement automate e": "Contact Innovative Dynamics LTD via WhatsApp at 0771493040 or email marketing@innovativedynamics.com to discuss implementation for your organization.",
  "how does automate e help save money": "Automate E reduces manual work, improves accuracy, increases transparency, and provides real-time reporting — all of which help organizations save money and make faster decisions.",
};

function findAnswer(q: string): string {
  const lower = q.toLowerCase();
  for (const [key, val] of Object.entries(FAQ)) {
    if (lower.includes(key) || key.includes(lower)) return val;
  }
  if (lower.includes("module") || lower.includes("feature")) return FAQ["what modules does it have"];
  if (lower.includes("implement") || lower.includes("start") || lower.includes("get")) return FAQ["how can my company implement automate e"];
  if (lower.includes("save") || lower.includes("money") || lower.includes("cost")) return FAQ["how does automate e help save money"];
  if (lower.includes("who") || lower.includes("client") || lower.includes("organization") || lower.includes("use")) return FAQ["which organizations use automate e"];
  if (lower.includes("what") || lower.includes("automate")) return FAQ["what is automate e"];
  if (lower.includes("demo")) return "You can explore our interactive demo at the Demo page! Click the 'Try Demo' link in the navigation bar.";
  return "Great question! For more details, please reach out to us on WhatsApp at 0771493040 or email marketing@innovativedynamics.com.";
}

type Msg = { role: "user" | "assistant"; text: string };

const MascotChat = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", text: "Hi! 👋 I'm the Automate E Assistant. Ask me anything about Automate E!" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const send = () => {
    if (!input.trim()) return;
    const q = input.trim();
    setInput("");
    setMsgs((prev) => [...prev, { role: "user", text: q }]);
    setTimeout(() => {
      setMsgs((prev) => [...prev, { role: "assistant", text: findAnswer(q) }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-80 sm:w-96 bg-card rounded-2xl shadow-elevated border border-border overflow-hidden"
          >
            <div className="bg-primary p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.img
                  src={mascotImg}
                  alt="Mascot"
                  className="w-8 h-8 object-contain"
                  animate={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="font-bold text-primary-foreground text-sm">Automate E Assistant</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-primary-foreground/70 hover:text-primary-foreground">
                <X size={18} />
              </button>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="border-t border-border p-3 flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-muted rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
              />
              <button type="submit" className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dancing Mascot button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="relative group"
      >
        {!open && (
          <motion.div
            className="absolute -top-12 right-0 bg-card rounded-lg shadow-card px-3 py-1.5 text-xs font-medium text-foreground whitespace-nowrap border border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}
          >
            Ask me anything about Automate E! 💬
          </motion.div>
        )}
        <motion.div
          className="relative w-20 h-20"
          animate={{
            y: [0, -8, 0, -4, 0],
            rotate: [0, -8, 8, -6, 0],
            scale: [1, 1.05, 1, 1.03, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src={mascotImg}
            alt="Chat with Automate E"
            className="w-20 h-20 object-contain drop-shadow-lg"
            animate={{
              scaleX: [1, 1.08, 0.95, 1.05, 1],
              scaleY: [1, 0.95, 1.08, 0.97, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default MascotChat;
