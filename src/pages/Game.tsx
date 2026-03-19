import { Link } from "react-router-dom";

const Game = () => (
  <div className="relative bg-black min-h-[100dvh]">
    <iframe
      src="/automateEGame.html"
      title="AutomateE Automation Journey Game"
      className="w-full h-[100dvh] border-0"
      allow="clipboard-write"
    />
    <div className="absolute top-3 left-3 z-10">
      <Link
        to="/"
        className="inline-flex items-center rounded-md bg-card/80 px-3 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary hover:bg-card transition-colors border border-border"
      >
        ← Back to website
      </Link>
    </div>
  </div>
);

export default Game;

