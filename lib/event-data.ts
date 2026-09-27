export const registrationUrl = "https://forms.gle/your-registration-form";

export const tracks = [
  {
    stone: "Space",
    field: "AI / ML",
    color: "#6c3baa",
    image: "/images/track-space.jpg",
    icon: "✦",
    description: "Build intelligent systems that help people navigate a world of information.",
    challenge: "Design an AI-powered tool that makes a complex real-world decision clearer, faster, or more accessible. Your solution should explain how it earns trust and handles imperfect data.",
  },
  {
    stone: "Mind",
    field: "EdTech",
    color: "#f2c230",
    image: "/images/track-mind.jpg",
    icon: "◈",
    description: "Make learning personal, playful, and possible for every kind of mind.",
    challenge: "Create a learning experience that adapts to a learner's pace and context, then gives them a meaningful way to see their progress.",
  },
  {
    stone: "Reality",
    field: "AR / VR",
    color: "#d0021b",
    image: "/images/track-reality.jpg",
    icon: "◉",
    description: "Blend physical and digital worlds to make useful things feel tangible.",
    challenge: "Prototype an immersive interface that helps someone understand, practice, or collaborate in a real-world setting. Keep the interaction grounded in a clear need.",
  },
  {
    stone: "Power",
    field: "Sustainability",
    color: "#b33dc6",
    image: "/images/track-power.jpg",
    icon: "✺",
    description: "Put technology to work on the systems that keep our planet thriving.",
    challenge: "Build a practical digital intervention that helps a community reduce waste, use resources wisely, or measure environmental impact.",
  },
  {
    stone: "Time",
    field: "FinTech",
    color: "#3db562",
    image: "/images/track-time.jpg",
    icon: "⟳",
    description: "Make financial tools more transparent, inclusive, and useful over time.",
    challenge: "Design a financial product that helps people make one important money decision with greater confidence, clarity, or control.",
  },
  {
    stone: "Soul",
    field: "HealthTech",
    color: "#e8792e",
    image: "/images/track-soul.jpg",
    icon: "♡",
    description: "Create technology that supports healthier lives with empathy at its core.",
    challenge: "Prototype a health-focused service that lowers a barrier to wellbeing while respecting privacy, access, and the human experience.",
  },
] as const;

export const schedule = [
  { time: "09:00", day: "NOV 15", title: "Doors open & team check-in", detail: "Get settled in the Innovation Lab, meet your crew, and collect your event kit.", icon: "door" },
  { time: "10:00", day: "NOV 15", title: "Opening ceremony + challenge reveal", detail: "The mission briefing, track announcements, rules, and the official start of the 24-hour build.", icon: "spark" },
  { time: "11:00", day: "NOV 15", title: "Build sprint I", detail: "Turn a problem into a prototype. Mentors make their first rounds through the teams.", icon: "build" },
  { time: "14:00", day: "NOV 15", title: "Workshop: ship the signal", detail: "A practical session on product thinking, pitching, and getting a demo ready for the real world.", icon: "workshop" },
  { time: "18:00", day: "NOV 15", title: "Mentor checkpoint", detail: "Pressure-test the scope, check the technical approach, and make the next hours count.", icon: "mentor" },
  { time: "00:00", day: "NOV 16", title: "Midnight refuel", detail: "A short reset for teams still deep in the build. Keep the idea sharp and the commits coming.", icon: "spark" },
  { time: "05:00", day: "NOV 16", title: "Submission window opens", detail: "Polish the demo, document the build, and submit before the final call.", icon: "build" },
  { time: "09:00", day: "NOV 16", title: "Demos, judging & closing", detail: "Present your work, celebrate the builders, and close the 24-hour mission together.", icon: "award" },
] as const;

export const judges = [
  { name: "To be announced", role: "AI / ML · Space Track", color: "#6c3baa", initials: "AI" },
  { name: "To be announced", role: "EdTech · Mind Track", color: "#f2c230", initials: "ED" },
  { name: "To be announced", role: "AR / VR · Reality Track", color: "#d0021b", initials: "XR" },
  { name: "To be announced", role: "Sustainability · Power Track", color: "#b33dc6", initials: "SU" },
  { name: "To be announced", role: "FinTech · Time Track", color: "#3db562", initials: "FI" },
  { name: "To be announced", role: "HealthTech · Soul Track", color: "#e8792e", initials: "HE" },
] as const;

export const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "City lights glowing after dark", label: "The city, after hours" },
  { src: "/images/gallery-2.jpg", alt: "Electric storm light across a night sky", label: "Ideas in motion" },
  { src: "/images/gallery-3.jpg", alt: "Colorful nebula clouds across deep space", label: "A universe of possibility" },
  { src: "/images/gallery-4.jpg", alt: "Abstract luminous forms in a dark landscape", label: "Build beyond the expected" },
] as const;