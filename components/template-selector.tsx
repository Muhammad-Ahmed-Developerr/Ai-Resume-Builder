// Updated template-selector.tsx
"use client"

import type { ResumeTemplate } from "@/app/page"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Palette, Zap, Minimize, Briefcase, Sparkles, Grid3X3, Layers, Eye, Globe, Github, Linkedin, ExternalLink } from "lucide-react"
import { useState } from "react"

interface TemplateSelectorProps {
  selectedTemplate: ResumeTemplate
  onTemplateChange: (template: ResumeTemplate) => void
}

const templates = [
  {
    id: "modern" as ResumeTemplate,
    name: "Modern",
    description: "Clean design with accent colors and modern typography",
    icon: Zap,
    preview: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    features: ["Color accents", "Progress bars", "Modern layout"],
    popularity: 85,
    color: "#3b82f6", // blue-500
  },
  {
    id: "creative" as ResumeTemplate,
    name: "Creative",
    description: "Bold design with creative elements and visual flair",
    icon: Palette,
    preview: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    features: ["Creative layout", "Visual elements", "Bold typography"],
    popularity: 65,
    color: "#a855f7", // purple-500
  },
  {
    id: "minimal" as ResumeTemplate,
    name: "Minimal",
    description: "Simple, clean design focused on content",
    icon: Minimize,
    preview: "bg-gradient-to-br from-gray-400/20 to-gray-600/20",
    features: ["Clean lines", "Minimal design", "Focus on content"],
    popularity: 75,
    color: "#9ca3af", // gray-400
  },
  {
    id: "professional" as ResumeTemplate,
    name: "Professional",
    description: "Traditional corporate design for formal applications",
    icon: Briefcase,
    preview: "bg-gradient-to-br from-blue-600/20 to-indigo-600/20",
    features: ["Corporate style", "Traditional layout", "Professional look"],
    popularity: 90,
    color: "#2563eb", // blue-600
  },
  {
    id: "elegant" as ResumeTemplate,
    name: "Elegant",
    description: "Sophisticated design with refined typography and spacing",
    icon: Sparkles,
    preview: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
    features: ["Elegant typography", "Refined spacing", "Sophisticated look"],
    popularity: 70,
    color: "#f59e0b", // amber-500
  },
  {
    id: "geometric" as ResumeTemplate,
    name: "Geometric",
    description: "Modern design with geometric shapes and bold sections",
    icon: Grid3X3,
    preview: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20",
    features: ["Geometric shapes", "Bold sections", "Contemporary style"],
    popularity: 60,
    color: "#14b8a6", // teal-500
  },
  {
    id: "layered" as ResumeTemplate,
    name: "Layered",
    description: "Dynamic design with layered elements and depth",
    icon: Layers,
    preview: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
    features: ["Layered design", "Visual depth", "Dynamic layout"],
    popularity: 55,
    color: "#8b5cf6", // violet-500
  },
]

export function TemplateSelector({ selectedTemplate, onTemplateChange }: TemplateSelectorProps) {
  const [previewTemplate, setPreviewTemplate] = useState<ResumeTemplate | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (templateId: ResumeTemplate) => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    
    // Set a small delay before showing preview to prevent blinking
    const timeout = setTimeout(() => {
      setPreviewTemplate(templateId)
    }, 150) // Reduced delay for smoother experience
    
    setHoverTimeout(timeout)
  }

  const handleMouseLeave = () => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    
    // Hide preview with a small delay
    const timeout = setTimeout(() => {
      setPreviewTemplate(null)
    }, 200) // Slight delay to prevent accidental closing
    
    setHoverTimeout(timeout)
  }

  const handlePreviewClose = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setPreviewTemplate(null)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => {
          const Icon = template.icon
          const isSelected = selectedTemplate === template.id
          const isPreview = previewTemplate === template.id

          return (
            <Card
              key={template.id}
              className={`relative cursor-pointer transition-all duration-300 hover:shadow-md group ${
                isSelected ? "ring-2 ring-primary shadow-md" : "border-2 border-transparent"
              } ${isPreview ? "ring-2 ring-blue-500 scale-105" : ""}`}
              onClick={() => onTemplateChange(template.id)}
              onMouseEnter={() => handleMouseEnter(template.id)}
              onMouseLeave={handleMouseLeave}
            >
              {isSelected && (
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-1 z-10">
                  <Check className="h-4 w-4" />
                </div>
              )}

              <div className="p-4">
                {/* Template Preview */}
                <div className={`h-24 rounded-lg mb-3 ${template.preview} flex items-center justify-center relative overflow-hidden transition-all duration-300`}>
                  <Icon className="h-8 w-8" style={{ color: template.color }} />
                  
                  {/* Popularity indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                    <div 
                      className="h-full transition-all duration-500" 
                      style={{ 
                        width: `${template.popularity}%`,
                        backgroundColor: template.color
                      }}
                    />
                  </div>
                  
                  {/* Preview overlay */}
                  <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300 ${
                    isPreview ? "opacity-100" : "opacity-0"
                  }`}>
                    <Eye className="h-6 w-6 text-white" />
                    <span className="text-white text-sm ml-1">Preview</span>
                  </div>
                </div>

                {/* Template Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold font-serif">{template.name}</h3>
                    {isSelected && (
                      <Badge variant="default" className="text-xs">
                        Selected
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground">{template.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {template.features.slice(0, 2).map((feature) => (
                        <Badge 
                          key={feature} 
                          variant="outline" 
                          className="text-xs"
                          style={{ 
                            borderColor: template.color,
                            color: template.color
                          }}
                        >
                          {feature}
                        </Badge>
                      ))}
                      {template.features.length > 2 && (
                        <Badge 
                          variant="outline" 
                          className="text-xs"
                          style={{ 
                            borderColor: template.color,
                            color: template.color
                          }}
                        >
                          +{template.features.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="text-xs text-muted-foreground flex items-center">
                      <div 
                        className="w-2 h-2 rounded-full mr-1" 
                        style={{ backgroundColor: template.color }}
                      />
                      {template.popularity}%
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

     
    </div>
  )
}