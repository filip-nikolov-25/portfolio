export const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const ExternalLinkIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

export const BrowserChrome = () => (
  <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-900/80 border-b border-white/5 backdrop-blur-sm z-20">
    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
  </div>
);
