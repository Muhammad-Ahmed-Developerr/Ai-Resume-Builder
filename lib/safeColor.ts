// lib/safeColor.ts
export function safeColor(color: string): string {
  if (!color) return "#000000";

  // Block unsupported color functions
  if (/oklab|oklch/i.test(color)) {
    return "#000000"; // fallback safe
  }

  // Already valid CSS colors (hex, rgb, hsl)
  if (/^#|^rgb|^hsl/i.test(color)) return color;

  // Try browser conversion
  try {
    const ctx = document.createElement("canvas").getContext("2d");
    if (ctx) {
      ctx.fillStyle = color;
      return ctx.fillStyle; // auto-converts to rgb()
    }
  } catch {}

  return "#000000";
}
