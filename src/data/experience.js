// Work experience, newest first. Only paid roles belong here —
// personal products live in projects.js instead.

export const experience = [
  {
    role: "Software Engineer",
    company: "BMS Smart Home",
    type: "Smart building systems",
    start: "Apr 2026",
    end: "Sep 2026",
    points: [
      "Built a native Kotlin and Jetpack Compose wall-tablet app that controls a whole apartment from one screen. The same app runs on the owner's phone.",
      "Shipped a kiosk browser that locks tablets to the building dashboard, survives reboots and updates itself from GitHub releases.",
      "Wrote Home Assistant integrations: a live 3D floor plan in Three.js and a push-to-talk intercom that streams to any speaker.",
    ],
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Python",
      "Home Assistant",
      "Three.js",
    ],
  },
  {
    role: "Software Engineer",
    company: "Najot Ta'lim",
    type: "IT education centre",
    start: "Sep 2025",
    end: "Feb 2026",
    points: [
      "Develop internal web applications and REST APIs with NestJS, PostgreSQL and React.",
      "Take features from database schema to finished UI, including auth, roles and reporting.",
      "Handle deployment, code review and production fixes.",
    ],
    stack: ["NestJS", "PostgreSQL", "Prisma", "React", "TypeScript"],
  },
];
