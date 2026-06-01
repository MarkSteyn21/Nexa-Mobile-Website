export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "Plans", href: "#plans" },
  { label: "BYO Plans", href: "#byo" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Support", href: "#support" },
] as const;

export const HERO_FEATURES = [
  { label: "No Contracts" },
  { label: "Self-RICA" },
  { label: "Great Rates" },
  { label: "Full Control" },
] as const;

export const WHY_NEXA = [
  {
    title: "No Contracts",
    description:
      "Month-to-month flexibility. You're always in control.",
  },
  {
    title: "Self-RICA",
    description:
      "Activate your SIM instantly from the comfort of your own home.",
  },
  {
    title: "App Control",
    description:
      "Manage everything from one smart app. Anytime, anywhere.",
  },
  {
    title: "Affordable Rates",
    description:
      "Competitive voice, data and SMS rates that give you more for less.",
  },
] as const;

export const APP_FEATURES = [
  {
    title: "Self-RICA",
    description: "Register and activate your SIM in minutes.",
  },
  {
    title: "Buy",
    description: "Purchase airtime and data bundles instantly.",
  },
  {
    title: "Transfer",
    description: "Send airtime and data to friends and family.",
  },
  {
    title: "Port In",
    description: "Keep your number when you switch to Nexa.",
  },
  {
    title: "SIM Swap",
    description: "Request a replacement SIM from the app.",
  },
  {
    title: "Manage Profile",
    description: "Update your details and preferences anytime.",
  },
] as const;

export const BEST_RATES = [
  {
    title: "Voice",
    primary: "0.99c",
    primaryLabel: "Per Min Off-Net",
    secondary: "0.49c",
    secondaryLabel: "Per Min On-Net",
  },
  {
    title: "Data",
    primary: "0.39c",
    primaryLabel: "Per MB",
  },
  {
    title: "SMS",
    primary: "0.49c",
    primaryLabel: "Per SMS",
  },
  {
    title: "International",
    primary: "R1.40c",
    primaryLabel: "Per SMS",
  },
] as const;

export type BundleTab = "data" | "voice" | "sms" | "whatsapp";

export const BUNDLE_TABS: { id: BundleTab; label: string }[] = [
  { id: "data", label: "Data Bundles" },
  { id: "voice", label: "Voice Bundles" },
  { id: "sms", label: "SMS Bundles" },
  { id: "whatsapp", label: "WhatsApp Bundle" },
];

export const DATA_BUNDLES = [
  { size: "1.5GB", price: 59 },
  { size: "3GB", price: 99 },
  { size: "5GB", price: 149 },
  { size: "10GB", price: 249 },
  { size: "15GB", price: 279 },
  { size: "20GB", price: 299 },
  { size: "25GB", price: 349 },
  { size: "35GB", price: 399 },
] as const;

export const VOICE_BUNDLES = [
  { size: "50 Min", price: 45 },
  { size: "100 Min", price: 79 },
  { size: "200 Min", price: 139 },
  { size: "500 Min", price: 299 },
] as const;

export const SMS_BUNDLES = [
  { size: "50 SMS", price: 25 },
  { size: "100 SMS", price: 45 },
  { size: "250 SMS", price: 99 },
  { size: "500 SMS", price: 179 },
] as const;

export const WHATSAPP_BUNDLE = {
  size: "2.1GB",
  price: 60,
  validity: "30 days",
  description: "WhatsApp data bundle for messaging on the go.",
};

export const BUNDLE_FOOTNOTES = [
  "Valid for 60 days",
  "All net calling",
  "No contract required",
] as const;

export const PREPAID_PLANS = [
  {
    name: "START ME UP",
    price: 29,
    minutes: 30,
    data: "250MB",
    sms: 30,
    accent: "from-violet-500 to-purple-600",
  },
  {
    name: "FIRST GIG",
    price: 49,
    minutes: 50,
    data: "1GB",
    sms: 50,
    accent: "from-purple-500 to-fuchsia-600",
  },
  {
    name: "QUICK FIX",
    price: 89,
    minutes: 100,
    data: "2GB",
    sms: 100,
    accent: "from-indigo-500 to-violet-600",
  },
  {
    name: "STREAM STARTER",
    price: 115,
    minutes: 150,
    data: "5GB",
    sms: 150,
    accent: "from-blue-500 to-indigo-600",
  },
  {
    name: "CALL ME MAYBE",
    price: 149,
    minutes: 300,
    data: "3GB",
    sms: 200,
    accent: "from-violet-600 to-purple-700",
  },
  {
    name: "OVERACHIEVER",
    price: 329,
    minutes: 500,
    data: "15GB",
    sms: 500,
    accent: "from-purple-600 to-indigo-700",
  },
] as const;

export const BYO_OPTIONS = {
  data: [
    { label: "500MB", price: 29 },
    { label: "1GB", price: 49 },
    { label: "3GB", price: 99 },
    { label: "5GB", price: 149 },
    { label: "10GB", price: 249 },
  ],
  voice: [
    { label: "50 Min", price: 25 },
    { label: "100 Min", price: 45 },
    { label: "200 Min", price: 79 },
    { label: "500 Min", price: 149 },
  ],
  sms: [
    { label: "50 SMS", price: 15 },
    { label: "100 SMS", price: 25 },
    { label: "250 SMS", price: 49 },
    { label: "500 SMS", price: 89 },
  ],
} as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Download App",
    description: "Get the HUGE App from your app store.",
  },
  {
    step: 2,
    title: "Self-RICA",
    description: "Register and activate your SIM from home.",
  },
  {
    step: 3,
    title: "Choose Plan",
    description: "Pick a prepaid plan or build your own.",
  },
  {
    step: 4,
    title: "Manage Everything",
    description: "Top up, transfer, and control your account.",
  },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Packages", href: "#packages" },
    { label: "Plans", href: "#plans" },
    { label: "BYO Plans", href: "#byo" },
  ],
  support: [
    { label: "How it Works", href: "#how-it-works" },
    { label: "Contact Us", href: "#support" },
    { label: "FAQs", href: "#support" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
} as const;

export const HUGE_APP_URL = "#";
