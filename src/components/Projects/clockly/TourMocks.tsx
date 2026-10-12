import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarPlus,
  Check,
  CheckCircle2,
  Coffee,
  Download,
  Inbox,
  Moon,
  Plane,
  Thermometer,
  Wrench,
} from "lucide-react";

const card =
  "bg-zinc-900/80 border border-zinc-800 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl";

const pad = (n: number) => String(n).padStart(2, "0");

const useTicker = (ms: number) => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), ms);
    return () => clearInterval(id);
  }, [ms]);
  return tick;
};

const Avatar = ({ name }: { name: string }) => (
  <span className="w-8 h-8 shrink-0 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] font-black text-orange-500">
    {name
      .split(" ")
      .map((p) => p[0])
      .join("")}
  </span>
);

export const TeamBoardMock = () => {
  const seconds = useTicker(1000) + 6 * 3600 + 42 * 60;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);

  const people = [
    {
      name: "Ana Petrovska",
      badge: (
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border bg-emerald-500/10 border-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Working · {h}h {pad(m)}m
        </span>
      ),
    },
    {
      name: "Marko Ilievski",
      badge: (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-amber-400/10 border-amber-400/20 text-amber-300 text-[9px] font-black uppercase tracking-widest">
          <Coffee size={10} /> On break · 12m
        </span>
      ),
    },
    {
      name: "Lena Hoffmann",
      badge: (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-rose-500/10 border-rose-500/20 text-rose-300 text-[9px] font-black uppercase tracking-widest">
          <Thermometer size={10} /> Sick · until Wed
        </span>
      ),
    },
    {
      name: "Ivan Stojanov",
      badge: (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-sky-500/10 border-sky-500/20 text-sky-300 text-[9px] font-black uppercase tracking-widest">
          <Plane size={10} /> Vacation · until Fri
        </span>
      ),
    },
    {
      name: "Sara Kostova",
      badge: (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full border bg-zinc-800/60 border-zinc-700 text-zinc-300 text-[9px] font-black uppercase tracking-widest">
          Done · 8h 05m
        </span>
      ),
    },
    {
      name: "Petar Petkov",
      badge: (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border bg-zinc-900 border-zinc-800 text-zinc-500 text-[9px] font-black uppercase tracking-widest">
          <Moon size={10} /> Not in
        </span>
      ),
    },
  ];

  return (
    <div className={`${card} overflow-hidden`}>
      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
        <span className="text-sm font-black text-white">Who's in today</span>
        <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">
          Updates live
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2 p-4 border-b border-zinc-800">
        {[
          { n: 2, label: "Working", tone: "text-emerald-400" },
          { n: 1, label: "Done", tone: "text-zinc-200" },
          { n: 2, label: "On leave", tone: "text-sky-300" },
          { n: 1, label: "Not in", tone: "text-zinc-400" },
        ].map((c) => (
          <div
            key={c.label}
            className="rounded-xl bg-black/30 border border-zinc-800 px-2 py-2"
          >
            <p className={`text-lg font-black tabular-nums ${c.tone}`}>{c.n}</p>
            <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-zinc-500 truncate">
              {c.label}
            </p>
          </div>
        ))}
      </div>
      <ul className="divide-y divide-zinc-800/70">
        {people.map((p) => (
          <li key={p.name} className="flex items-center gap-3 px-4 py-2.5">
            <Avatar name={p.name} />
            <span className="text-xs font-bold text-zinc-200 truncate flex-1 min-w-0">
              {p.name}
            </span>
            <span className="shrink-0">{p.badge}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const INBOX = [
  {
    icon: Plane,
    tone: "text-sky-300 bg-sky-500/10",
    who: "Ana Petrovska",
    what: "Vacation · 14 – 16 Jul · 3 days",
    detail: "17 days left after this",
  },
  {
    icon: Wrench,
    tone: "text-orange-400 bg-orange-500/10",
    who: "Marko Ilievski",
    what: "Time fix · Tue 7 Oct",
    detail: (
      <>
        <span className="line-through text-zinc-600">08:00 – 20:00</span>
        <ArrowRight size={10} className="inline mx-1 text-emerald-400" />
        08:00 – 16:30
      </>
    ),
  },
  {
    icon: CalendarPlus,
    tone: "text-violet-300 bg-violet-500/10",
    who: "Lena Hoffmann",
    what: "Missing day · Fri 3 Oct",
    detail: "Phone ran out of battery",
  },
];

export const ApprovalsMock = () => {
  const step = useTicker(1600) % (INBOX.length + 2);
  const approved = Math.min(step, INBOX.length);
  const waiting = INBOX.length - approved;

  return (
    <div className={`${card} overflow-hidden`}>
      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
        <span className="flex items-center gap-2 text-sm font-black text-white">
          <Inbox size={16} className="text-orange-500" /> Waiting for you
        </span>
        <span
          className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest transition-colors ${
            waiting
              ? "bg-orange-500/15 text-orange-400"
              : "bg-emerald-500/15 text-emerald-400"
          }`}
        >
          {waiting ? `${waiting} to review` : "All done"}
        </span>
      </div>
      <ul className="p-3 space-y-2">
        {INBOX.map((item, i) => {
          const done = i < approved;
          const Icon = item.icon;
          return (
            <li
              key={item.who}
              className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-500 ${
                done
                  ? "bg-emerald-500/5 border-emerald-500/20"
                  : "bg-black/30 border-zinc-800"
              }`}
            >
              <span className={`p-2 rounded-xl shrink-0 ${item.tone}`}>
                <Icon size={14} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-white truncate">{item.who}</p>
                <p className="text-[11px] text-zinc-400 truncate">{item.what}</p>
                <p className="text-[10px] text-zinc-500 truncate">{item.detail}</p>
              </div>
              <span
                className={`shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-500 ${
                  done
                    ? "bg-emerald-500 text-white"
                    : "bg-emerald-500/10 text-emerald-400"
                }`}
              >
                {done ? <Check size={11} /> : null}
                {done ? "Approved" : "Approve"}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="px-5 pb-4 text-[10px] text-zinc-500">
        The employee gets an email and an in-app notification.
      </p>
    </div>
  );
};

const PANEL_TABS = ["Overview", "Shifts", "Leave", "Account", "History"];

export const EmployeePanelMock = () => (
  <div className={`${card} overflow-hidden`}>
    <div className="px-5 pt-5 pb-4 border-b border-zinc-800">
      <div className="flex items-center gap-3">
        <span className="w-11 h-11 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm font-black text-orange-500">
          MI
        </span>
        <div className="min-w-0">
          <p className="text-base font-black text-white">Marko Ilievski</p>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
            Employee · North Macedonia
          </p>
        </div>
      </div>
      <div className="flex gap-1 mt-4 overflow-hidden">
        {PANEL_TABS.map((t, i) => (
          <span
            key={t}
            className={`px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest whitespace-nowrap ${
              i === 0 ? "bg-orange-500 text-black" : "text-zinc-500"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
    <div className="p-4 space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Worked · Sep", value: "171h 45m", tone: "text-white" },
          { label: "Overtime", value: "5h 30m", tone: "text-orange-300" },
          { label: "Balance", value: "+3h 45m", tone: "text-emerald-300" },
          { label: "Vacation left", value: "15 days", tone: "text-emerald-300" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-black/30 border border-zinc-800 px-3 py-2.5"
          >
            <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">
              {s.label}
            </p>
            <p className={`text-base font-black tabular-nums ${s.tone}`}>
              {s.value}
            </p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-black/30 border border-zinc-800 p-3 space-y-2.5">
        <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">
          Account history
        </p>
        {[
          { what: "Vacation days 18 → 15", meta: "1 Oct · by Filip · “Carried over”" },
          { what: "Country Germany → North Macedonia", meta: "12 Sep · by Filip" },
        ].map((h) => (
          <div key={h.what} className="flex gap-2.5">
            <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="text-xs font-bold text-white truncate">{h.what}</p>
              <p className="text-[10px] text-zinc-500 truncate">{h.meta}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <span className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-zinc-800 text-zinc-200 text-[9px] font-black uppercase tracking-widest">
          <Download size={11} /> Export month
        </span>
        <span className="flex-1 flex items-center justify-center py-2 rounded-xl bg-red-500/10 text-red-400 text-[9px] font-black uppercase tracking-widest">
          Deactivate
        </span>
      </div>
    </div>
  </div>
);
