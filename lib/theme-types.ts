export interface ResumeTheme {
  colors: {
    primary: string
    secondary: string
    accent: string
    text: string
    textLight: string
    background: string
    cardBackground: string
  }
  fonts: {
    heading: string
    body: string
  }
  spacing: {
    section: string
    element: string
  }
  borderRadius: string
}

export const defaultThemes: Record<string, ResumeTheme> = {
  emerald: {
    colors: {
      primary: "#059669",
      secondary: "#10b981",
      accent: "#34d399",
      text: "#1f2937",
      textLight: "#6b7280",
      background: "#ffffff",
      cardBackground: "#f9fafb",
    },
    fonts: {
      heading: "font-serif",
      body: "font-sans",
    },
    spacing: {
      section: "mb-6",
      element: "mb-3",
    },
    borderRadius: "rounded-lg",
  },
  blue: {
    colors: {
      primary: "#2563eb",
      secondary: "#3b82f6",
      accent: "#60a5fa",
      text: "#1f2937",
      textLight: "#6b7280",
      background: "#ffffff",
      cardBackground: "#f8fafc",
    },
    fonts: {
      heading: "font-serif",
      body: "font-sans",
    },
    spacing: {
      section: "mb-6",
      element: "mb-3",
    },
    borderRadius: "rounded-lg",
  },
  purple: {
    colors: {
      primary: "#7c3aed",
      secondary: "#8b5cf6",
      accent: "#a78bfa",
      text: "#1f2937",
      textLight: "#6b7280",
      background: "#ffffff",
      cardBackground: "#faf5ff",
    },
    fonts: {
      heading: "font-serif",
      body: "font-sans",
    },
    spacing: {
      section: "mb-6",
      element: "mb-3",
    },
    borderRadius: "rounded-lg",
  },
  orange: {
    colors: {
      primary: "#ea580c",
      secondary: "#f97316",
      accent: "#fb923c",
      text: "#1f2937",
      textLight: "#6b7280",
      background: "#ffffff",
      cardBackground: "#fff7ed",
    },
    fonts: {
      heading: "font-serif",
      body: "font-sans",
    },
    spacing: {
      section: "mb-6",
      element: "mb-3",
    },
    borderRadius: "rounded-lg",
  },
  slate: {
    colors: {
      primary: "#475569",
      secondary: "#64748b",
      accent: "#94a3b8",
      text: "#1e293b",
      textLight: "#64748b",
      background: "#ffffff",
      cardBackground: "#f8fafc",
    },
    fonts: {
      heading: "font-sans",
      body: "font-sans",
    },
    spacing: {
      section: "mb-6",
      element: "mb-3",
    },
    borderRadius: "rounded-lg",
  },
  rose: {
    colors: {
      primary: "#e11d48",
      secondary: "#f43f5e",
      accent: "#fb7185",
      text: "#1f2937",
      textLight: "#6b7280",
      background: "#ffffff",
      cardBackground: "#fff1f2",
    },
    fonts: {
      heading: "font-serif",
      body: "font-sans",
    },
    spacing: {
      section: "mb-6",
      element: "mb-3",
    },
    borderRadius: "rounded-lg",
  },
}

export const fontOptions = [
  { label: "Montserrat + Open Sans", value: "default", heading: "font-serif", body: "font-sans" },
  { label: "Inter + Inter", value: "inter", heading: "font-sans", body: "font-sans" },
  { label: "Playfair + Source Sans", value: "playfair", heading: "font-serif", body: "font-sans" },
  { label: "Roboto + Roboto Slab", value: "roboto", heading: "font-sans", body: "font-serif" },
  { label: "Poppins + Lato", value: "poppins", heading: "font-sans", body: "font-sans" },
  { label: "Merriweather + Open Sans", value: "merriweather", heading: "font-serif", body: "font-sans" },
  { label: "Nunito + Nunito Sans", value: "nunito", heading: "font-sans", body: "font-sans" },
  { label: "Rubik + Karla", value: "rubik", heading: "font-sans", body: "font-sans" },
]

export const colorPresets = [
  {
    name: "Ocean",
    colors: {
      primary: "#0ea5e9",
      secondary: "#0284c7",
      accent: "#38bdf8",
      text: "#1e293b",
      textLight: "#64748b",
      background: "#ffffff",
      cardBackground: "#f8fafc",
    },
  },
  {
    name: "Forest",
    colors: {
      primary: "#16a34a",
      secondary: "#15803d",
      accent: "#4ade80",
      text: "#1f2937",
      textLight: "#6b7280",
      background: "#ffffff",
      cardBackground: "#f0fdf4",
    },
  },
  {
    name: "Sunset",
    colors: {
      primary: "#f59e0b",
      secondary: "#d97706",
      accent: "#fbbf24",
      text: "#1f2937",
      textLight: "#6b7280",
      background: "#ffffff",
      cardBackground: "#fffbeb",
    },
  },
  {
    name: "Rose",
    colors: {
      primary: "#e11d48",
      secondary: "#be185d",
      accent: "#f43f5e",
      text: "#1f2937",
      textLight: "#6b7280",
      background: "#ffffff",
      cardBackground: "#fff1f2",
    },
  },
  {
    name: "Indigo",
    colors: {
      primary: "#6366f1",
      secondary: "#4f46e5",
      accent: "#818cf8",
      text: "#1f2937",
      textLight: "#6b7280",
      background: "#ffffff",
      cardBackground: "#f0f9ff",
    },
  },
  {
    name: "Teal",
    colors: {
      primary: "#0d9488",
      secondary: "#0f766e",
      accent: "#2dd4bf",
      text: "#1f2937",
      textLight: "#6b7280",
      background: "#ffffff",
      cardBackground: "#f0fdfa",
    },
  },
  {
    name: "Midnight",
    colors: {
      primary: "#1e40af",
      secondary: "#1e3a8a",
      accent: "#3b82f6",
      text: "#1e293b",
      textLight: "#64748b",
      background: "#ffffff",
      cardBackground: "#eff6ff",
    },
  },
  {
    name: "Emerald",
    colors: {
      primary: "#047857",
      secondary: "#059669",
      accent: "#10b981",
      text: "#1f2937",
      textLight: "#6b7280",
      background: "#ffffff",
      cardBackground: "#ecfdf5",
    },
  },
  {
    name: "Amber",
    colors: {
      primary: "#b45309",
      secondary: "#d97706",
      accent: "#f59e0b",
      text: "#1f2937",
      textLight: "#6b7280",
      background: "#ffffff",
      cardBackground: "#fffbeb",
    },
  },
]