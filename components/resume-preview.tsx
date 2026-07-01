// Updated resume-preview.tsx
"use client"

import type { ResumeData, ResumeTemplate } from "@/app/page"
import type { ResumeTheme } from "@/lib/theme-types"
import { ModernTemplate } from "@/components/templates/modern-template"
import { CreativeTemplate } from "@/components/templates/creative-template"
import { MinimalTemplate } from "@/components/templates/minimal-template"
import { ProfessionalTemplate } from "@/components/templates/professional-template"
import { ElegantTemplate } from "@/components/templates/elegant-template"
import { GeometricTemplate } from "@/components/templates/geometric-template"
import { LayeredTemplate } from "@/components/templates/layered-template"

interface ResumePreviewProps {
  data: ResumeData
  template: ResumeTemplate
  theme: ResumeTheme
}

export function ResumePreview({ data, template, theme }: ResumePreviewProps) {
  const renderTemplate = () => {
    const commonProps = { data, theme }

    switch (template) {
      case "modern":
        return <ModernTemplate {...commonProps} />
      case "creative":
        return <CreativeTemplate {...commonProps} />
      case "minimal":
        return <MinimalTemplate {...commonProps} />
      case "professional":
        return <ProfessionalTemplate {...commonProps} />
      case "elegant":
        return <ElegantTemplate {...commonProps} />
      case "geometric":
        return <GeometricTemplate {...commonProps} />
      case "layered":
        return <LayeredTemplate {...commonProps} />
      default:
        return <ModernTemplate {...commonProps} />
    }
  }

  return (
    <div 
      id="resume-preview" 
      className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-full"
      style={{ 
        minHeight: '1123px',
        transform: 'scale(1)',
        transformOrigin: 'top center'
      }}
    >
      {renderTemplate()}
    </div>
  )
}