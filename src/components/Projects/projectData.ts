export type ClocklyMock =
  | "clock"
  | "shiftPlanner"
  | "audit"
  | "leave"
  | "week"
  | "teamBoard"
  | "payroll"
  | "approvals"
  | "dashboard";

export interface FeatureGroup {
  title: string;
  items: string[];
  mock?: ClocklyMock;
}

export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  imageFit?: "contain" | "cover";
  images: string[];
  tags: string[];
  description: string;
  features: string[];
  featureGroups?: FeatureGroup[];
  highlights?: { value: string; label: string }[];
}

export const featuredProject: Project = {
  title: "Clockly",
  subtitle: "Time tracking, shift planning, leave & payroll in one app",
  link: "https://www.clockly.it.com/",
  imageFit: "contain",
  images: ["/images/Clockly/Clockly-time.png"],
  tags: [
    "React",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "JWT + httpOnly Cookies",
    "RBAC",
    "Resend",
    "Vercel",
    "Render",
  ],
  description:
    "A full-stack, multi-company workforce platform that replaces spreadsheets, paper timesheets and \"who's off next week?\" messages. Employees clock in and out from any device, see their shifts, request time off and fix mistakes in their hours. Admins plan shifts, approve everything from one console, see the whole team at a glance and export the month's hours for payroll in one click.",
  highlights: [
    { value: "11", label: "Feature modules" },
    { value: "2", label: "Roles, server-enforced" },
    { value: "3", label: "Holiday calendars" },
    { value: "1-click", label: "Payroll export" },
  ],
  features: [],
  featureGroups: [
    {
      title: "Time Tracking",
      mock: "clock",
      items: [
        "One-tap clock in / break / clock out with a live timer and 8-hour progress ring",
        "Overtime mode after 8 hours, counted automatically",
        "Server job every 5 minutes auto-closes forgotten shifts and breaks",
        "Worked time always excludes breaks",
        "Night shifts that cross midnight",
      ],
    },
    {
      title: "Shift Planning",
      mock: "shiftPlanner",
      items: [
        "Configurable company-wide standard week",
        "Week and month Shift Planner with bulk select by person, day or team",
        "Set shifts with notes, mark days off or reset to the standard week",
        "Approved leave shown in the planner to avoid conflicts",
        "Weekly progress: hours worked vs. hours planned",
        "Deduplicated in-app notifications for real schedule changes only",
      ],
    },
    {
      title: "Time Corrections & Audit Trail",
      mock: "audit",
      items: [
        "\"Request fix\" on finished shifts and \"Report missing day\"",
        "Side-by-side admin review of recorded vs. requested times",
        "Direct shift editor for admins",
        "Full change history: who, when, old/new values and reason",
        "Validation: no future ends, breaks inside shifts, max 24h",
        "Idempotent approvals, safe against double clicks",
      ],
    },
    {
      title: "Leave & Absence",
      mock: "leave",
      items: [
        "Vacation, Sick Leave and Personal leave types",
        "Counts only working days, skipping weekends and national holidays",
        "Balance tracking with over-balance approval protection",
        "Approval workflow with employee and date-range filters",
      ],
    },
    {
      title: "Calendars",
      mock: "week",
      items: [
        "Team week view with hours, shifts, leave and live \"Clocked in\" status",
        "Per-person and team totals per day and week",
        "Month view with public holidays for North Macedonia, Switzerland and Germany",
        "Colour-coded leave types, holiday filters and day-detail side panel",
        "Dedicated mobile layout with a 7-day strip and per-person cards",
      ],
    },
    {
      title: "Team & Company Management",
      mock: "teamBoard",
      items: [
        "Invite-only sign-up with one-time codes that set company and role",
        "\"Who's in today\" live board with filterable counters",
        "Admin directory with hours, overtime, balances, search, filter and sort",
        "Employee panel with shifts, history, requests and personal export",
        "Logged edits to name, role, country and vacation balance",
        "Deactivate / reactivate while keeping all history",
        "Guards so a company always keeps at least one active admin",
      ],
    },
    {
      title: "Payroll Export",
      mock: "payroll",
      items: [
        "Monthly export to Excel or CSV for the whole company or one employee",
        "Summary sheet: worked, expected, overtime, balance, leave and holidays",
        "Day-by-day sheet with every shift, edited shifts flagged",
        "Real Excel time values so SUM and formulas just work",
      ],
    },
    {
      title: "Notifications & Email",
      mock: "approvals",
      items: [
        "In-app notification centre with unread count and deep links",
        "Branded Resend emails for leave and correction requests and decisions",
        "Single-use password reset links valid for 15 minutes",
        "Login redirect that returns users to the linked page",
      ],
    },
    {
      title: "Employee Dashboard",
      mock: "dashboard",
      items: [
        "Days worked this year, hours this month and remaining time off",
        "Today's session: start, end, break and worked time",
        "Upcoming 7 days with a \"Next shift\" headline and planned hours",
        "Monthly shifts with \"Request fix\", \"Fix pending\" and \"Edited\" badges",
      ],
    },
    {
      title: "Security & Reliability",
      items: [
        "Role-based access control enforced on the server",
        "bcrypt password hashing and httpOnly cookie sessions",
        "Rate limiting on login, sign-up and password reset",
        "Full multi-company data isolation",
        "Server-side validation and parameterised SQL queries",
        "Deactivated accounts blocked immediately",
      ],
    },
    {
      title: "General",
      items: [
        "Mobile-first, works in any browser including Safari on iPhone",
        "Dark and light mode with a remembered preference",
        "Sales landing page with product tour, savings calculator and demos",
      ],
    },
  ],
};

export const projects: Project[] = [
  {
    title: "SongBook - Chords for Guitar",
    images: ["/images/SongBook/SongBookSS.png"],
    tags: ["Next.js", "Firebase", "Tailwind"],
    description:
      "A modern platform for musicians to discover, save, and play songs with synchronized lyrics and guitar chords.",
    features: [
      "Inline chord display",
      "Secure authentication",
      "Firebase integration",
    ],
  },
  {
    title: "VibeOnEdu",
    images: ["/images/SparkasseSS/first.png"],
    tags: ["React", "FinTech", "Hackathon"],
    description:
      "A financial education platform created to make money management easier and more accessible for young people.",
    features: [
      "Interactive content",
      "Youth-focused UX",
      "FinTech inspired design",
    ],
  },
  {
    title: "Larger World",
    images: ["/images/LargerWorldSS/first.png"],
    tags: ["Front-end", "UX/UI", "Team Project"],
    description:
      "An inclusive sustainability platform focused on encouraging users to rethink habits and discover better environmental practices.",
    features: [
      "Horizontal scrolling",
      "Interactive navigation",
      "Sustainability focus",
    ],
  },
  {
    title: "MHRA",
    images: ["/images/MHRASS/first.png"],
    tags: ["Multi-language", "Event Management", "Web App"],
    description:
      "A web application built for the Macedonian HR Association, providing event management and a Multi-language experience.",
    features: [
      "Event management",
      "Multi-language support",
      "Blog management",
    ],
  },
  {
    title: "Safe Blink",
    images: ["/images/HomepageSafeBlink.png"],
    tags: ["Cybersecurity", "Education"],
    description:
      "An educational cybersecurity platform designed to improve online safety awareness through interactive content.",
    features: [
      "Reward engagement system",
      "Interactive lessons",
      "Video-based learning",
    ],
  },
  {
    title: "Cosmic Portfolio",
    images: ["/images/PortfolioSS.png"],
    tags: ["Canvas API", "TypeScript", "Animation"],
    description:
      "An immersive personal portfolio experience built with dynamic animations and HTML Canvas to create a unique interactive environment.",
    features: [
      "HTML Canvas animations",
      "Interactive cosmic VFX",
      "TypeScript architecture",
    ],
  },
];
