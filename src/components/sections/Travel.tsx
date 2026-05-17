import { useMemo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useLang } from "../../i18n/context";
import { travel, continentLabels, ui } from "../../data/content";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export function Travel() {
  const { lang } = useLang();
  const labels = ui[lang];

  const all = useMemo(() => Object.values(travel).flat(), []);
  const isoSet = useMemo(() => new Set(all.map((c) => c.iso3)), [all]);
  const total = all.length;
  const continentCount = Object.keys(travel).length;

  return (
    <div className="space-y-4">
      <div className="flex gap-6 items-baseline">
        <div>
          <div className="text-4xl font-bold gradient-text leading-none">{total}</div>
          <div className="text-xs text-slate-500 mt-1">{labels.countriesCount}</div>
        </div>
        <div>
          <div className="text-4xl font-bold gradient-text leading-none">{continentCount}</div>
          <div className="text-xs text-slate-500 mt-1">{labels.continents}</div>
        </div>
      </div>

      <div className="rounded-xl bg-gradient-to-br from-sky-50 to-white border border-sky-200/50 overflow-hidden">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 145 }}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const iso = (geo.id as string) || (geo.properties as { iso_a3?: string }).iso_a3 || "";
                const visited = isoSet.has(iso) || isoSet.has(numToIso3(iso));
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={visited ? "#0ea5e9" : "#e0f2fe"}
                    stroke="#bae6fd"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: visited ? "#0284c7" : "#bae6fd" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      <div className="space-y-3">
        {Object.entries(travel).map(([cont, list]) => (
          <div key={cont}>
            <div className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-1.5">
              {lang === "en" ? continentLabels[cont].en : continentLabels[cont].zh}
              <span className="ml-2 text-slate-400 normal-case font-normal">({list.length})</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {list.map((c) => (
                <span
                  key={c.iso3}
                  className="px-2.5 py-1 rounded-md bg-sky-100/70 text-sky-700 text-xs font-medium border border-sky-200/40"
                >
                  {lang === "en" ? c.nameEn : c.nameZh}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Some topojson sources use numeric country codes; this map covers the visited countries.
const NUM_TO_ISO3: Record<string, string> = {
  "392": "JPN", "410": "KOR", "764": "THA", "360": "IDN", "784": "ARE",
  "276": "DEU", "250": "FRA", "380": "ITA", "756": "CHE", "040": "AUT",
  "336": "VAT", "208": "DNK", "752": "SWE", "578": "NOR", "246": "FIN",
  "840": "USA", "124": "CAN", "818": "EGY", "710": "ZAF", "036": "AUS",
};
function numToIso3(id: string): string {
  return NUM_TO_ISO3[id.padStart(3, "0")] || id;
}
