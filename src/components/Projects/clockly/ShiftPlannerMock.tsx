import { useEffect, useState } from "react";
import { Bell, CheckCircle2, Clock3, Moon, Plane } from "lucide-react";

const card =
  "bg-zinc-900/80 border border-zinc-800 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl";

type PlanCell =
  | { t: "std" }
  | { t: "plan"; start: string; end: string; note?: string }
  | { t: "off"; planned?: boolean }
  | { t: "vac" };

const STD_SHIFT = { start: "09:00", end: "17:00" };
const PLAN_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const FIRST_DAY = 13;
const NIGHT: PlanCell = { t: "plan", start: "22:00", end: "06:00", note: "Night cover" };
const EARLY: PlanCell = { t: "plan", start: "07:00", end: "15:00" };
const STD: PlanCell = { t: "std" };
const OFF: PlanCell = { t: "off" };

const PLAN_ROWS: { name: string; cells: PlanCell[] }[] = [
  { name: "Ana", cells: [STD, STD, STD, STD, STD, OFF, OFF] },
  { name: "Marko", cells: [NIGHT, NIGHT, { t: "off", planned: true }, STD, STD, OFF, OFF] },
  {
    name: "Lena",
    cells: [EARLY, EARLY, EARLY, EARLY, STD, { t: "plan", start: "10:00", end: "14:00" }, OFF],
  },
  { name: "Ivan", cells: [STD, STD, STD, STD, { t: "vac" }, OFF, OFF] },
];

const AUTO_HOVER: [number, number][] = [
  [1, 0],
  [2, 5],
  [3, 2],
  [3, 4],
  [2, 6],
];

const hoursOf = (cell: PlanCell) =>
  cell.t === "std" ? STD_SHIFT : cell.t === "plan" ? cell : null;

const isNight = (h: { start: string; end: string }) => h.end <= h.start;

const shiftLength = ({ start, end }: { start: string; end: string }) => {
  const toMin = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3));
  let diff = toMin(end) - toMin(start);
  if (diff <= 0) diff += 24 * 60;
  return `${Math.floor(diff / 60)}h${diff % 60 ? ` ${diff % 60}m` : ""}`;
};

const PlanTooltip = ({ name, col, cell }: { name: string; col: number; cell: PlanCell }) => {
  const hours = hoursOf(cell);
  const source =
    cell.t === "plan" || (cell.t === "off" && cell.planned)
      ? "Planned shift"
      : cell.t === "vac"
        ? "Approved leave"
        : "Standard week";
  return (
    <span className="block text-left whitespace-nowrap">
      <span className="block text-[9px] font-black uppercase tracking-widest text-zinc-500">
        {name} · {PLAN_DAYS[col]} {FIRST_DAY + col} Oct
      </span>
      <span className="flex items-center gap-1.5 mt-1 text-xs font-black text-white tabular-nums">
        {hours ? (
          <>
            {isNight(hours) ? (
              <Moon size={11} className="text-orange-400" />
            ) : (
              <Clock3 size={11} className="text-orange-400" />
            )}
            {hours.start} – {hours.end}
            <span className="text-zinc-500 font-bold">{shiftLength(hours)}</span>
          </>
        ) : cell.t === "vac" ? (
          "On vacation"
        ) : (
          "Day off"
        )}
      </span>
      <span className="block mt-0.5 text-[9px] font-bold text-zinc-500">
        {source}
        {hours && isNight(hours) ? " · ends next day" : ""}
      </span>
      {cell.t === "plan" && cell.note && (
        <span className="block mt-1 text-[10px] text-zinc-300">{cell.note}</span>
      )}
    </span>
  );
};

const GRID =
  "grid grid-cols-[48px_repeat(7,minmax(0,1fr))] sm:grid-cols-[72px_repeat(7,minmax(0,1fr))]";

export const ShiftPlannerMock = () => {
  const [auto, setAuto] = useState(0);
  const [mouse, setMouse] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (mouse) return;
    const id = setInterval(() => setAuto((i) => (i + 1) % AUTO_HOVER.length), 2400);
    return () => clearInterval(id);
  }, [mouse]);

  const [hRow, hCol] = mouse ?? AUTO_HOVER[auto];

  return (
    <div className="space-y-3">
      <div className={card}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <span className="text-sm font-black text-white">13 – 19 Oct</span>
          <span className="flex items-center gap-0.5 p-0.5 rounded-lg bg-black/40 border border-zinc-800 text-[9px] font-black uppercase tracking-widest">
            <span className="px-2 py-1 rounded-md bg-orange-500 text-black">Week</span>
            <span className="px-2 py-1 text-zinc-500">Month</span>
          </span>
        </div>

        <div className="text-[10px]" onMouseLeave={() => setMouse(null)}>
          <div className={`${GRID} text-[9px] font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-800`}>
            <span className="p-2.5">Team</span>
            {PLAN_DAYS.map((d, i) => (
              <span key={d} className={`py-2.5 text-center ${i >= 5 ? "bg-black/30" : ""}`}>
                <span className="sm:hidden">{d[0]}</span>
                <span className="hidden sm:inline">{d}</span>
              </span>
            ))}
          </div>

          {PLAN_ROWS.map((row, r) => (
            <div
              key={row.name}
              className={`${GRID} items-stretch border-b border-zinc-800/70 last:border-0`}
            >
              <span className="p-2 sm:p-2.5 flex items-center font-bold text-zinc-200 truncate">
                {row.name}
              </span>
              {row.cells.map((cell, c) => {
                const active = r === hRow && c === hCol;
                const hours = hoursOf(cell);
                return (
                  <span
                    key={c}
                    onMouseEnter={() => setMouse([r, c])}
                    className={`relative p-0.5 sm:p-1 ${c >= 5 ? "bg-black/30" : ""}`}
                  >
                    <span
                      className={`h-11 sm:h-12 rounded-md sm:rounded-lg border flex flex-col items-center justify-center font-black tabular-nums leading-tight transition-all text-[8px] sm:text-[10px] ${
                        cell.t === "vac"
                          ? "border-sky-500/20 bg-sky-500/10 text-sky-300"
                          : cell.t === "plan"
                            ? "border-orange-500/30 bg-orange-500/10 text-orange-300"
                            : hours
                              ? "border-zinc-800 bg-zinc-800/30 text-zinc-400"
                              : "border-transparent text-zinc-600"
                      } ${active ? "ring-1 ring-orange-500 border-orange-500" : ""}`}
                    >
                      {hours ? (
                        <>
                          <span>{hours.start}</span>
                          <span className="opacity-70">{hours.end}</span>
                        </>
                      ) : cell.t === "vac" ? (
                        <Plane size={11} />
                      ) : (
                        <span className="uppercase">Off</span>
                      )}
                    </span>
                    {active && (
                      <span
                        role="tooltip"
                        className={`absolute z-20 bottom-full mb-1.5 pointer-events-none px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 shadow-2xl ${
                          c >= 5 ? "right-0" : c <= 1 ? "left-0" : "left-1/2 -translate-x-1/2"
                        }`}
                      >
                        <PlanTooltip name={row.name} col={c} cell={cell} />
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 px-5 py-3.5 border-t border-zinc-800 text-[10px] font-black">
          <span className="text-zinc-400">2 days selected</span>
          <span className="px-2 py-1 rounded-md bg-black/40 border border-zinc-800 text-zinc-300 tabular-nums">
            22:00 – 06:00
          </span>
          <span className="ml-auto flex items-center gap-1 px-3 py-1.5 rounded-lg bg-orange-500 text-black uppercase tracking-widest">
            <CheckCircle2 size={11} /> Set shift
          </span>
        </div>
      </div>

      <div className={`${card} p-4 flex items-start gap-3`}>
        <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 shrink-0">
          <Bell size={16} />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-white font-bold">Schedule updated</p>
          <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">
            Your shifts on Mon 13 Oct – Tue 14 Oct are now 22:00 – 06:00 (ends
            the next day). Note: Night cover
          </p>
        </div>
      </div>
    </div>
  );
};
