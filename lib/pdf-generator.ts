// Updated pdf-generator.ts
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import type { ResumeData, ResumeTemplate, ResumeTheme } from "@/lib/theme-types"

export async function generateResumePDF(
  elementId: string,
  resumeData: ResumeData,
  template: ResumeTemplate,
  theme: ResumeTheme,
  fileName: string = "resume"
): Promise<void> {
  const element = document.getElementById(elementId)
  if (!element) {
    console.error(`❌ Element with id "${elementId}" not found.`)
    throw new Error(`Element with id "${elementId}" not found.`)
  }

  try {
    console.log("📄 Capturing resume preview for PDF...")

    // Create a clone for PDF generation
    const clone = element.cloneNode(true) as HTMLElement
    clone.id = "resume-preview-clone"
    clone.style.position = "absolute"
    clone.style.top = "0"
    clone.style.left = "0"
    clone.style.width = "794px" // A4 width in pixels
    clone.style.minHeight = "1123px" // A4 height in pixels
    clone.style.background = "#ffffff"
    clone.style.zIndex = "9999"
    clone.style.transform = "none"
    clone.style.transformOrigin = "top left"
    
    // Append to body
    document.body.appendChild(clone)

    // Replace oklch colors with hex equivalents
    replaceOklchColors(clone)

    // Wait for layout to stabilize
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Generate PDF
    const canvas = await html2canvas(clone, {
      scale: 2, // Higher resolution for better quality
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
    })

    console.log("🖼️ Canvas created, converting to PDF...")

    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [794, 1123], // A4 size
    })

    pdf.addImage(imgData, "PNG", 0, 0, 794, 1123)
    pdf.save(`${fileName}.pdf`)

    console.log("✅ PDF saved successfully")
  } catch (error) {
    console.error("❌ Error while generating PDF:", error)
    throw error
  } finally {
    // Cleanup
    const clone = document.getElementById("resume-preview-clone")
    if (clone) clone.remove()
  }
}

// Helper function to replace oklch colors with hex equivalents
function replaceOklchColors(element: HTMLElement) {
  const colorMappings: Record<string, string> = {
    "oklch(1 0 0)": "#ffffff", // white
    "oklch(0.35 0 0)": "#475569", // slate-600
    "oklch(0.97 0 0)": "#f1f5f9", // slate-100
    "oklch(0.45 0.15 160)": "#059669", // emerald-600
    "oklch(0.55 0.15 160)": "#10b981", // emerald-500
    "oklch(0.55 0.22 25)": "#dc2626", // red-600
    "oklch(0.9 0 0)": "#e2e8f0", // slate-200
    "oklch(0.45 0 0)": "#64748b", // slate-500
    "oklch(0.145 0 0)": "#0f172a", // slate-900
    "oklch(0.985 0 0)": "#f8fafc", // slate-50
    "oklch(0.269 0 0)": "#334155", // slate-700
    "oklch(0.708 0 0)": "#94a3b8", // slate-400
    "oklch(0.6 0.15 160)": "#34d399", // emerald-400
    "oklch(0.396 0.141 25.723)": "#b91c1c", // red-700
    "oklch(0.637 0.237 25.331)": "#f87171", // red-400
  }

  // Replace in style attributes
  element.querySelectorAll("*").forEach((el) => {
    const style = (el as HTMLElement).style
    if (style.color) {
      Object.keys(colorMappings).forEach((oklch) => {
        if (style.color.includes(oklch)) {
          style.color = colorMappings[oklch]
        }
      })
    }
    if (style.backgroundColor) {
      Object.keys(colorMappings).forEach((oklch) => {
        if (style.backgroundColor.includes(oklch)) {
          style.backgroundColor = colorMappings[oklch]
        }
      })
    }
    if (style.borderColor) {
      Object.keys(colorMappings).forEach((oklch) => {
        if (style.borderColor.includes(oklch)) {
          style.borderColor = colorMappings[oklch]
        }
      })
    }
  })
}