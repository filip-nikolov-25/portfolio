import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Coffee,
  Download,
  FileSpreadsheet,
  Gift,
  History,
  Plane,
  Square,
  Thermometer,
  Wrench,
} from "lucide-react";

const card =
  "bg-zinc-900/80 border border-zinc-800 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl";

const pad = (n: number) => String(n).padStart(2, "0");

// Ticking timer that starts at 6h 42m so it looks like a real shift
const useShiftTimer = (startSeconds = 6 * 3600 + 42 * 60 + 13) => {
  const [seconds, setSeconds] = useState(startSeconds);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return seconds;
};

export const ClockMock = ({ compact = false }: { compact?: boolean }) => {
  const seconds = useShiftTimer();
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const progress = Math.min(seconds / (8 * 3600), 1);
  const r = 52;
  const c = 2 * Math.PI * r;

  return (
    <div className={`${card} p-5 ${compact ? "" : "sm:p-6"}`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
          Today's shift
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Working
        </span>
      </div>

      <div className={`flex items-center ${compact ? "gap-4" : "gap-5"}`}>
        <div className={`relative shrink-0 ${compact ? "w-24 h-24" : "w-28 h-28"}`}>
          <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
            <circle cx="60" cy="60" r={r} className="stroke-zinc-800" strokeWidth="8" fill="none" />
            <circle
              cx="60"
              cy="60"
              r={r}
              stroke="#f97316"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={c}
              strokeDashoffset={c * (1 - progress)}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-black text-white tabular-nums">
              {h}:{pad(m)}
              <span className="text-zinc-500 text-sm">:{pad(s)}</span>
            </span>
            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">
              of 8h
            </span>
          </div>
        </div>

        <div className="flex-1 space-y-2 min-w-0">
          <Row label="Started" value="08:02" />
          <Row label="Break" value="30 min" />
          <div className={`grid gap-2 pt-1 ${compact ? "grid-cols-1" : "grid-cols-2"}`}>
            <span className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-[10px] font-black uppercase">
              <Coffee size={12} /> Break
            </span>
            <span className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-orange-500 text-white text-[10px] font-black uppercase">
              <Square size={10} /> End
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between gap-2 text-xs">
    <span className="text-zinc-500 font-bold uppercase text-[10px] tracking-wider">
      {label}
    </span>
    <span className="text-white font-bold tabular-nums">{value}</span>
  </div>
);

// Leave request that flips to "Approved" every few seconds
export const LeaveApprovalMock = () => {
  const [approved, setApproved] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setApproved((a) => !a), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`${card} p-5`}>
      <div className="flex items-center justify-between mb-3">
        <span className="px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
          <Plane size={10} /> Vacation
        </span>
        <span
          className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border transition-colors duration-500 ${
            approved
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
              : "bg-orange-500/10 text-orange-400 border-orange-500/20"
          }`}
        >
          {approved ? "Approved" : "Pending"}
        </span>
      </div>
      <p className="text-white font-bold">Ana Petrovska</p>
      <p className="text-xs text-zinc-500 mb-4">
        14 – 18 Jul · <span className="text-zinc-300">5 working days</span>
      </p>
      <div className="grid grid-cols-2 gap-2">
        <span
          className={`py-2 rounded-xl text-center text-[10px] font-black uppercase transition-all duration-500 ${
            approved
              ? "bg-emerald-500 text-white"
              : "bg-emerald-500/10 text-emerald-400"
          }`}
        >
          {approved ? "✓ Approved" : "Approve"}
        </span>
        <span className="py-2 rounded-xl text-center text-[10px] font-black uppercase bg-red-500/10 text-red-400">
          Decline
        </span>
      </div>
    </div>
  );
};

type WeekCell =
  | { t: "h"; v: string }
  | { t: "vac" }
  | { t: "sick" }
  | { t: "hol" }
  | { t: "off" }
  | { t: "now" };

const WEEK_ROWS: { name: string; cells: WeekCell[]; total: string; pct: number }[] = [
  {
    name: "Ana",
    cells: [{ t: "h", v: "8h" }, { t: "h", v: "8h 10m" }, { t: "vac" }, { t: "vac" }, { t: "now" }],
    total: "22h",
    pct: 55,
  },
  {
    name: "Marko",
    cells: [{ t: "h", v: "7h 45m" }, { t: "h", v: "8h" }, { t: "h", v: "8h 30m" }, { t: "hol" }, { t: "now" }],
    total: "28h",
    pct: 70,
  },
  {
    name: "Lena",
    cells: [{ t: "sick" }, { t: "h", v: "8h" }, { t: "h", v: "7h 50m" }, { t: "h", v: "8h" }, { t: "now" }],
    total: "24h",
    pct: 60,
  },
];

const Cell = ({ cell }: { cell: WeekCell }) => {
  switch (cell.t) {
    case "h":
      return <span className="text-emerald-300 font-black tabular-nums">{cell.v}</span>;
    case "vac":
      return (
        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[9px] font-black uppercase">
          <Plane size={9} />
          <span className="hidden sm:inline">Vacation</span>
        </span>
      );
    case "sick":
      return (
        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-300 text-[9px] font-black uppercase">
          <Thermometer size={9} />
          <span className="hidden sm:inline">Sick</span>
        </span>
      );
    case "hol":
      return (
        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[9px] font-black uppercase">
          <Gift size={9} />
          <span className="hidden sm:inline">Holiday</span>
        </span>
      );
    case "now":
      return (
        <span className="flex items-center gap-1 text-orange-300 text-[9px] font-black uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="hidden sm:inline">In</span>
        </span>
      );
    default:
      return <span className="text-zinc-700">·</span>;
  }
};

export const WeekMock = () => (
  <div className={`${card} overflow-hidden`}>
    <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
      <span className="text-sm font-black text-white">6 – 10 Oct</span>
      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
        Team week
      </span>
    </div>
    <div className="text-[11px]">
      <div className="grid grid-cols-[64px_repeat(5,minmax(0,1fr))_52px] sm:grid-cols-[80px_repeat(5,minmax(0,1fr))_64px] text-[9px] font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-800">
        <span className="p-2.5">Team</span>
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
          <span
            key={d}
            className={`p-2.5 text-center ${i === 4 ? "text-orange-400" : ""}`}
          >
            {d}
          </span>
        ))}
        <span className="p-2.5 text-right">Week</span>
      </div>
      {WEEK_ROWS.map((row) => (
        <div
          key={row.name}
          className="grid grid-cols-[64px_repeat(5,minmax(0,1fr))_52px] sm:grid-cols-[80px_repeat(5,minmax(0,1fr))_64px] items-center border-b border-zinc-800/70 last:border-0"
        >
          <span className="p-2.5 flex items-center gap-2 min-w-0">
            <span className="hidden sm:flex w-6 h-6 shrink-0 rounded-full bg-zinc-800 border border-zinc-700 items-center justify-center text-[8px] font-black text-orange-500 uppercase">
              {row.name.slice(0, 2)}
            </span>
            <span className="font-bold text-zinc-200 truncate">{row.name}</span>
          </span>
          {row.cells.map((cell, i) => (
            <span key={i} className="p-2 text-center flex justify-center">
              <Cell cell={cell} />
            </span>
          ))}
          <span className="p-2.5 flex flex-col items-end gap-1">
            <span className="font-black text-white tabular-nums">{row.total}</span>
            <span className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
              <span
                className="block h-full bg-orange-500 rounded-full"
                style={{ width: `${row.pct}%` }}
              />
            </span>
          </span>
        </div>
      ))}
    </div>
  </div>
);

export const AuditMock = () => (
  <div className="space-y-3">
    <div className={`${card} p-5`}>
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-400">
          <Wrench size={12} /> Correction request
        </span>
        <span className="text-[10px] text-zinc-500 font-bold">Tue 7 Oct</span>
      </div>
      <p className="text-white font-bold text-sm mb-3">Marko Ilievski</p>
      <div className="text-xs space-y-1.5 p-3 bg-black/40 rounded-2xl border border-zinc-800">
        <p className="text-zinc-500 line-through">08:00 – 20:00 · 12h (forgot to clock out)</p>
        <p className="text-white flex items-center gap-1.5">
          <ArrowRight size={12} className="text-emerald-400 shrink-0" />
          08:00 – 16:30 · 30 min break · 8h
        </p>
      </div>
      <p className="text-xs text-zinc-400 italic mt-3">
        “Forgot to clock out before leaving.”
      </p>
    </div>
    <div className={`${card} p-4 flex items-center gap-3`}>
      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
        <History size={16} />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-white font-bold">
          Approved by Admin · logged in history
        </p>
        <p className="text-[11px] text-zinc-500">
          Who, when, old and new times, and the reason are all kept.
        </p>
      </div>
      <CheckCircle2 size={18} className="text-emerald-400 shrink-0 ml-auto" />
    </div>
  </div>
);

export const BalanceMock = () => (
  <div className={`${card} p-5`}>
    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">
      Time off balance
    </p>
    <div className="flex items-end gap-2 mb-3">
      <span className="text-4xl font-black text-white">17</span>
      <span className="text-sm text-zinc-500 font-bold mb-1">of 24 days left</span>
    </div>
    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
      <div className="h-full w-[71%] bg-emerald-400 rounded-full" />
    </div>
    <p className="text-[11px] text-zinc-500 mt-3">
      Weekends and public holidays are never counted.
    </p>
  </div>
);

const PAYROLL_SAMPLE_MONTH = "2026-09";

const PAYROLL_SAMPLE = [
  { name: "Ana Petrovska", email: "ana@example.com", daysWorked: 18, worked: "146:20", expected: "144:00", overtime: "3:05", balance: "+2:20", vacation: 3, sick: 0, personal: 0 },
  { name: "Marko Ilievski", email: "marko@example.com", daysWorked: 21, worked: "171:45", expected: "168:00", overtime: "5:30", balance: "+3:45", vacation: 0, sick: 0, personal: 0 },
  { name: "Lena Hoffmann", email: "lena@example.com", daysWorked: 19, worked: "151:10", expected: "152:00", overtime: "1:15", balance: "-0:50", vacation: 0, sick: 2, personal: 0 },
  { name: "Ivan Stojanov", email: "ivan@example.com", daysWorked: 15, worked: "122:30", expected: "120:00", overtime: "2:40", balance: "+2:30", vacation: 5, sick: 0, personal: 1 },
  { name: "Sara Kostova", email: "sara@example.com", daysWorked: 21, worked: "168:15", expected: "168:00", overtime: "0:45", balance: "+0:15", vacation: 0, sick: 0, personal: 0 },
];

const PAYROLL_TOTALS = { worked: "760:00", expected: "752:00", overtime: "13:15", balance: "+8:00" };

const DAILY_SAMPLE = [
  { day: "Mon 1", start: "08:00", end: "16:45", brk: "30m", worked: "8:15", overtime: "0:15", note: "" },
  { day: "Tue 2", start: "08:05", end: "17:20", brk: "30m", worked: "8:45", overtime: "0:45", note: "" },
  { day: "Wed 3", start: "07:58", end: "16:30", brk: "30m", worked: "8:02", overtime: "0:02", note: "" },
  { day: "Thu 4", start: "08:10", end: "18:40", brk: "45m", worked: "9:45", overtime: "1:45", note: "Edited" },
  { day: "Fri 5", start: "08:00", end: "15:30", brk: "30m", worked: "7:00", overtime: "0:00", note: "" },
  { day: "Mon 8", start: "", end: "", brk: "", worked: "", overtime: "", note: "Holiday" },
];

const downloadSamplePayrollCsv = () => {
  const header = [
    "Employee", "Email", "Working days", "Days worked", "Worked hours",
    "Expected hours", "Overtime hours", "Balance hours", "Vacation days",
    "Sick leave days", "Personal days",
  ];
  const lines = [header.join(",")];
  for (const r of PAYROLL_SAMPLE) {
    lines.push(
      [
        r.name, r.email, 21, r.daysWorked, r.worked, r.expected, r.overtime,
        r.balance.replace("+", ""), r.vacation, r.sick, r.personal,
      ].join(","),
    );
  }
  const blob = new Blob(["﻿" + lines.join("\r\n") + "\r\n"], {
    type: "text/csv;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `clockly-sample-hours-${PAYROLL_SAMPLE_MONTH}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

const shortName = (name: string) => {
  const [first, last] = name.split(" ");
  return last ? `${first} ${last[0]}.` : first;
};

const balanceColor = (b: string) =>
  b.startsWith("-") ? "text-rose-300" : "text-emerald-300";

const LeaveChips = ({ r }: { r: (typeof PAYROLL_SAMPLE)[number] }) => {
  const chips = [
    { n: r.vacation, label: "vac", cls: "bg-sky-500/10 border-sky-500/20 text-sky-300" },
    { n: r.sick, label: "sick", cls: "bg-rose-500/10 border-rose-500/20 text-rose-300" },
    { n: r.personal, label: "pers", cls: "bg-violet-500/10 border-violet-500/20 text-violet-300" },
  ].filter((c) => c.n > 0);
  if (chips.length === 0) return <span className="block text-right text-zinc-700">·</span>;
  return (
    <span className="flex flex-wrap justify-end gap-1">
      {chips.map((c) => (
        <span
          key={c.label}
          className={`px-1.5 py-0.5 rounded-md border text-[9px] font-black uppercase whitespace-nowrap ${c.cls}`}
        >
          {c.n} {c.label}
        </span>
      ))}
    </span>
  );
};

const SUMMARY_GRID =
  "grid grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))_minmax(0,1.2fr)] sm:grid-cols-[minmax(0,1.6fr)_repeat(4,minmax(0,1fr))_minmax(0,1.3fr)]";
const DAILY_GRID =
  "grid grid-cols-[minmax(0,1fr)_repeat(4,minmax(0,1fr))_minmax(0,1.1fr)] sm:grid-cols-[minmax(0,1fr)_repeat(5,minmax(0,1fr))_minmax(0,1.1fr)]";

export const PayrollExportMock = () => {
  const [sheet, setSheet] = useState<"summary" | "daily">("summary");
  const [autoplay, setAutoplay] = useState(true);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(
      () => setSheet((s) => (s === "summary" ? "daily" : "summary")),
      4500,
    );
    return () => clearInterval(id);
  }, [autoplay]);

  useEffect(() => {
    if (!downloaded) return;
    const id = setTimeout(() => setDownloaded(false), 2500);
    return () => clearTimeout(id);
  }, [downloaded]);

  const pickSheet = (s: "summary" | "daily") => {
    setAutoplay(false);
    setSheet(s);
  };

  const handleDownload = () => {
    downloadSamplePayrollCsv();
    setDownloaded(true);
  };

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className={`${card} relative overflow-hidden`}>
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-zinc-800">
          <span className="flex items-center gap-2.5 min-w-0">
            <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
              <FileSpreadsheet size={16} />
            </span>
            <span className="text-sm font-black text-white truncate">
              clockly-hours-{PAYROLL_SAMPLE_MONTH}.xlsx
            </span>
          </span>
          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 shrink-0">
            Excel · CSV
          </span>
        </div>

        <div className="text-[11px] min-h-[268px]">
          {sheet === "summary" ? (
            <>
              <div className={`${SUMMARY_GRID} text-[9px] font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-800 bg-black/20`}>
                <span className="p-2.5">Employee</span>
                <span className="p-2.5 text-right">Worked</span>
                <span className="p-2.5 text-right hidden sm:block">Expected</span>
                <span className="p-2.5 text-right">OT</span>
                <span className="p-2.5 text-right">Balance</span>
                <span className="p-2.5 text-right">Leave</span>
              </div>
              {PAYROLL_SAMPLE.map((r) => (
                <div key={r.name} className={`${SUMMARY_GRID} items-center border-b border-zinc-800/70`}>
                  <span className="p-2.5 font-bold text-zinc-200 truncate">
                    <span className="sm:hidden">{shortName(r.name)}</span>
                    <span className="hidden sm:inline">{r.name}</span>
                  </span>
                  <span className="p-2.5 text-right font-black text-white tabular-nums">{r.worked}</span>
                  <span className="p-2.5 text-right text-zinc-500 tabular-nums hidden sm:block">{r.expected}</span>
                  <span className="p-2.5 text-right font-black text-orange-300 tabular-nums">{r.overtime}</span>
                  <span className={`p-2.5 text-right font-black tabular-nums ${balanceColor(r.balance)}`}>{r.balance}</span>
                  <span className="p-2"><LeaveChips r={r} /></span>
                </div>
              ))}
              <div className={`${SUMMARY_GRID} items-center bg-orange-500/5`}>
                <span className="p-2.5 font-black uppercase tracking-widest text-[9px] text-orange-400">Total</span>
                <span className="p-2.5 text-right font-black text-white tabular-nums">{PAYROLL_TOTALS.worked}</span>
                <span className="p-2.5 text-right text-zinc-500 tabular-nums hidden sm:block">{PAYROLL_TOTALS.expected}</span>
                <span className="p-2.5 text-right font-black text-orange-300 tabular-nums">{PAYROLL_TOTALS.overtime}</span>
                <span className="p-2.5 text-right font-black text-emerald-300 tabular-nums">{PAYROLL_TOTALS.balance}</span>
                <span className="p-2.5 text-right text-[9px] font-black uppercase text-zinc-400">11 days</span>
              </div>
            </>
          ) : (
            <>
              <div className="px-3 py-2 text-[10px] font-bold text-zinc-400 border-b border-zinc-800">
                Marko Ilievski · September
              </div>
              <div className={`${DAILY_GRID} text-[9px] font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-800 bg-black/20`}>
                <span className="p-2.5">Day</span>
                <span className="p-2.5 text-center">In</span>
                <span className="p-2.5 text-center">Out</span>
                <span className="p-2.5 text-center hidden sm:block">Break</span>
                <span className="p-2.5 text-right">Worked</span>
                <span className="p-2.5 text-right">OT</span>
                <span className="p-2.5 text-right">Note</span>
              </div>
              {DAILY_SAMPLE.map((d) =>
                d.note === "Holiday" ? (
                  <div key={d.day} className="grid grid-cols-[minmax(0,1fr)_minmax(0,5fr)] items-center">
                    <span className="p-2.5 font-bold text-zinc-200">{d.day}</span>
                    <span className="p-2 flex justify-center">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[9px] font-black uppercase">
                        <Gift size={9} /> Public holiday
                      </span>
                    </span>
                  </div>
                ) : (
                  <div key={d.day} className={`${DAILY_GRID} items-center border-b border-zinc-800/70`}>
                    <span className="p-2.5 font-bold text-zinc-200">{d.day}</span>
                    <span className="p-2.5 text-center text-zinc-400 tabular-nums">{d.start}</span>
                    <span className="p-2.5 text-center text-zinc-400 tabular-nums">{d.end}</span>
                    <span className="p-2.5 text-center text-zinc-500 hidden sm:block">{d.brk}</span>
                    <span className="p-2.5 text-right font-black text-white tabular-nums">{d.worked}</span>
                    <span className={`p-2.5 text-right font-black tabular-nums ${d.overtime === "0:00" ? "text-zinc-600" : "text-orange-300"}`}>
                      {d.overtime}
                    </span>
                    <span className="p-2 text-right">
                      {d.note && (
                        <span className="px-1.5 py-0.5 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-300 text-[9px] font-black uppercase">
                          {d.note}
                        </span>
                      )}
                    </span>
                  </div>
                ),
              )}
            </>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 px-3 py-3 border-t border-zinc-800 bg-black/30">
          <div className="flex gap-1">
            {(["summary", "daily"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => pickSheet(s)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border transition-colors ${
                  sheet === s
                    ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                    : "text-zinc-500 hover:text-white border-transparent"
                }`}
              >
                {s === "summary" ? "Summary" : "Daily"}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={handleDownload}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest text-white transition-colors ${
              downloaded ? "bg-emerald-500" : "bg-orange-500 hover:bg-orange-400"
            }`}
          >
            {downloaded ? <CheckCircle2 size={12} /> : <Download size={12} />}
            {downloaded ? "Saved" : "Sample CSV"}
          </button>
        </div>
      </div>
    </div>
  );
};
