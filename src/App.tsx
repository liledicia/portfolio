import { useEffect, useState } from "react";
import { LangProvider } from "./i18n/context";
import { LangToggle } from "./components/LangToggle";
import { RadialTree } from "./components/RadialTree";
import { MobileAccordion } from "./components/MobileAccordion";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false,
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}

function App() {
  const isMobile = useIsMobile();

  return (
    <LangProvider>
      <div className="relative min-h-screen z-10">
        <LangToggle />
        {isMobile ? <MobileAccordion /> : <RadialTree />}

        <div className="absolute bottom-2 right-4 text-[10px] text-sky-600/40 z-10 pointer-events-none">
          Chengxi Li · 2026
        </div>
      </div>
    </LangProvider>
  );
}

export default App;
