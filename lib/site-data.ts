import { businessDetails } from "@/lib/business-details";

export type NavItem = {
  label: string;
  href: string;
};

type FooterLink = {
  label: string;
  href: string;
};

type ServiceItem = {
  title: string;
  tag: string;
  description: string;
  bullets: string[];
  accent: string;
  darkAccent: string;
  iconClass: string;
  badgeClass: string;
};

type PricingItem = {
  title: string;
  range: string;
};

type StepItem = {
  title: string;
  description: string;
};

type MaterialGuide = {
  title: string;
  bestFor: string;
  note: string;
};

type GalleryItem = {
  title: string;
  category: string;
  description: string;
  palette: string;
};

type ContactDetail = {
  title: string;
  value: string;
  detail: string;
  href?: string;
};

type SocialLink = {
  label: string;
  href: string;
};

export const navigationItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const trustBadges = [
  "Replies within 24 hours",
  "Simple local payment options",
  "Pickup, meetup, or delivery",
];

export const heroStats = [
  { value: "24 hrs", label: "Typical first reply" },
  { value: "2 to 5 days", label: "Usual lead time" },
  { value: "Metro Manila", label: "Core service area" },
];

export const serviceItems: ServiceItem[] = [
  {
    title: "Ready-Made Model Printing",
    tag: "Print from your file",
    description:
      "Send a file or model link and we handle slicing, setup, and print production.",
    bullets: [
      "Works well for shared STL files and model-library links",
      "We flag scaling or printability issues before production",
      "Great for school projects, organizers, and hobby parts",
    ],
    accent: "from-accent-50 via-white to-white",
    darkAccent: "dark:from-slate-900 dark:via-slate-950 dark:to-accent-900/20",
    iconClass:
      "bg-white text-accent-700 shadow-sm dark:bg-accent-500/15 dark:text-accent-200 dark:ring-1 dark:ring-accent-400/30 dark:shadow-none",
    badgeClass:
      "border-accent-100 bg-white/90 text-accent-700 dark:border-accent-400/20 dark:bg-accent-500/10 dark:text-accent-200",
  },
  {
    title: "Custom Design + Print",
    tag: "Model from scratch",
    description:
      "Need a part that does not exist yet? We can model it around your measurements and use case.",
    bullets: [
      "Useful for replacements, brackets, holders, and enclosures",
      "Minor fit revisions are easy to handle early",
      "Best for repairs and practical one-off parts",
    ],
    accent: "from-brandBlue-50 via-white to-white",
    darkAccent: "dark:from-slate-900 dark:via-slate-950 dark:to-brandBlue-900/20",
    iconClass:
      "bg-white text-brandBlue-700 shadow-sm dark:bg-brandBlue-500/15 dark:text-brandBlue-200 dark:ring-1 dark:ring-brandBlue-400/30 dark:shadow-none",
    badgeClass:
      "border-brandBlue-100 bg-white/90 text-brandBlue-700 dark:border-brandBlue-400/20 dark:bg-brandBlue-500/10 dark:text-brandBlue-200",
  },
  {
    title: "Personalized Prints",
    tag: "Gifts and branded items",
    description:
      "Turn names, messages, or simple ideas into giftable and branded prints.",
    bullets: [
      "Popular for keychains, tags, giveaways, and mini signage",
      "Easy to customize with names, dates, and colors",
      "Beginner-friendly even without a ready-made file",
    ],
    accent: "from-slate-50 via-white to-white",
    darkAccent: "dark:from-slate-900 dark:via-slate-950 dark:to-slate-800/60",
    iconClass:
      "bg-white text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-100 dark:ring-1 dark:ring-white/10 dark:shadow-none",
    badgeClass:
      "border-slate-200 bg-white/90 text-slate-700 dark:border-slate-700 dark:bg-white/5 dark:text-slate-100",
  },
  {
    title: "Multi-Color Prints",
    tag: "Color-separated output",
    description:
      "Multi-color jobs for logos, signage, decorative pieces, and standout custom orders.",
    bullets: [
      "Best when the model has clear color zones",
      "We review color count before approving the print",
      "Ideal for branded pieces and decorative work",
    ],
    accent: "from-accent-50 via-white to-brandBlue-50/30",
    darkAccent: "dark:from-slate-900 dark:via-slate-950 dark:to-accent-900/30",
    iconClass:
      "bg-white text-accent-700 shadow-sm dark:bg-accent-500/15 dark:text-accent-200 dark:ring-1 dark:ring-accent-400/30 dark:shadow-none",
    badgeClass:
      "border-accent-100 bg-white/90 text-accent-700 dark:border-accent-400/20 dark:bg-accent-500/10 dark:text-accent-200",
  },
];

export const pricingItems: PricingItem[] = [
  {
    title: "Basic prints",
    range: "Php 3 to Php 5 / gram",
  },
  {
    title: "Functional parts",
    range: "Php 4 to Php 6 / gram",
  },
  {
    title: "Multi-color prints",
    range: "Php 5 to Php 8 / gram",
  },
  {
    title: "Custom design fee",
    range: "Starts at Php 150+",
  },
];

export const materialGuides: MaterialGuide[] = [
  {
    title: "PLA",
    bestFor: "Display pieces, organizers, school projects, light-duty household parts",
    note:
      "Best starting point for decorative and general-use prints that will stay indoors and away from high heat.",
  },
  {
    title: "PETG",
    bestFor: "Stronger utility parts, holders, brackets, and items exposed to moderate heat",
    note:
      "Recommended when the part may flex, sit in a warm room, or handle more regular use.",
  },
  {
    title: "TPU",
    bestFor: "Flexible feet, soft grips, cable protection, bumpers, and light shock-absorbing parts",
    note:
      "Not every design suits TPU well, so flexibility requests are reviewed before confirming the quote.",
  },
];

export const processSteps: StepItem[] = [
  {
    title: "Send your file or idea",
    description:
      "Share your file, model link, sketch, or reference photo.",
  },
  {
    title: "Receive a quote and recommendations",
    description:
      "We review the request and suggest the best material and setup.",
  },
  {
    title: "Approve and schedule production",
    description:
      "Once approved, we confirm payment timing and add the job to the queue.",
  },
  {
    title: "Quality check and handoff",
    description:
      "We check the print, pack it, and arrange pickup, meetup, or delivery.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Filament guide bracket",
    category: "Functional",
    description: "Replacement part for a home workshop setup with reinforced corners.",
    palette: "from-[#0F172A] via-[#13233A] to-[#1D3557]",
  },
  {
    title: "Two-tone desk nameplate",
    category: "Personalized",
    description: "A clean gift piece using layered text and stand-up lettering.",
    palette: "from-accent-700 via-accent-500 to-brandBlue-400",
  },
  {
    title: "Mini logo display",
    category: "Multi-color",
    description: "AMS color-separated logo for a small business counter display.",
    palette: "from-[#0F172A] via-brandBlue-500 to-accent-400",
  },
  {
    title: "Prototype enclosure",
    category: "Prototype",
    description: "Quick-turn casing for a small electronics proof-of-concept.",
    palette: "from-slate-950 via-slate-800 to-slate-500",
  },
];

export const footerLinks: FooterLink[] = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Quote", href: "#quote" },
  { label: "Contact", href: "#contact" },
];

export const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Refund / Cancellation Policy", href: "/refund-cancellation-policy" },
  { label: "Payment Policy", href: "/payment-policy" },
  { label: "File Handling Policy", href: "/file-handling-policy" },
];

export const sameAsLinks: SocialLink[] = [
  ...businessDetails.socialLinks,
];

export const contactDetails: ContactDetail[] = [
  {
    title: "Facebook / Messenger",
    value: businessDetails.messengerPath,
    detail: "Best for quick follow-ups, image sharing, and order updates.",
    href: businessDetails.messengerUrl,
  },
  {
    title: "Email",
    value: businessDetails.email,
    detail: "Best for detailed requests, batch orders, and file-sharing links.",
    href: `mailto:${businessDetails.email}`,
  },
  {
    title: "Phone",
    value: businessDetails.phone,
    detail: "Available for urgent coordination and pickup scheduling.",
    href: `tel:${businessDetails.phone.replaceAll(" ", "")}`,
  },
  {
    title: "Service area",
    value: businessDetails.serviceAreaSummary,
    detail: "Pickup, meetup, and local delivery options are confirmed per order.",
  },
];

export const supportedFileTypes = [
  "STL",
  "3MF",
  "OBJ",
  "STEP",
  "Public Google Drive or Dropbox links",
  "Thingiverse / Printables model links",
];

export const serviceTypeOptions = [
  "Ready-Made Model Printing",
  "Custom Design + Print",
  "Personalized Prints",
  "Multi-Color Prints",
];

export const materialOptions = ["PLA", "PETG", "TPU", "Not sure yet"];

export const colorOptions = [
  "Black",
  "White",
  "Gray",
  "Blue",
  "Red",
  "Green",
  "Transparent PETG",
  "Multi-color",
  "Not sure yet",
];

export const deliveryOptions = [
  "Pickup",
  "Local delivery",
  "Meetup",
  "Still deciding",
];

export const budgetOptions = [
  "Under Php 300",
  "Php 300 to Php 800",
  "Php 800 to Php 1,500",
  "Php 1,500+",
  "Need help estimating",
];
