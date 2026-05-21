import { useEffect, useState } from "react";
import { LangProvider } from "./i18n/context";
import { LangToggle } from "./components/LangToggle";
import { Desktop } from "./components/Desktop";
import { Mobile } from "./components/Mobile";

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
        {isMobile ? <Mobile /> : <Desktop />}
      </div>
    </LangProvider>
  );
}

export default App;
