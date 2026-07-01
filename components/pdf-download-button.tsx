"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { generateResumePDF } from "@/lib/pdf-generator"
import type { ResumeData, ResumeTemplate, ResumeTheme } from "@/lib/theme-types"
import { useToast } from "@/components/ui/use-toast"

interface PDFDownloadButtonProps {
  resumeData: ResumeData
  template?: ResumeTemplate
  theme?: ResumeTheme
  fileName?: string
}

export function PDFDownloadButton({
  resumeData,
  template = "modern",
  theme,
  fileName = "resume",
}: PDFDownloadButtonProps) {
  const { toast } = useToast()

  const handleDownload = async () => {
    try {
      console.log("📥 Download button clicked")

      toast({
        title: "Generating PDF...",
        description: "Please wait while we prepare your resume.",
      })

      await generateResumePDF(
        "resume-preview", // must match <div id="resume-preview"> in page.tsx
        resumeData,
        template,
        theme || {},
        fileName
      )

      toast({
        title: "Success ✅",
        description: "Your PDF has been downloaded!",
      })
    } catch (error) {
      console.error("❌ Failed to generate PDF:", error)
      toast({
        title: "Error ❌",
        description: "PDF could not be generated. Try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Button onClick={handleDownload} className="w-full mt-4" size="lg">
      <Download className="mr-2 h-4 w-4" />
      Download PDF
    </Button>
  )
}
