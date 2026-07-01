"use client"

import { useState } from "react"
import type { ResumeTheme } from "@/lib/theme-types"
import { defaultThemes, fontOptions, colorPresets } from "@/lib/theme-types"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Palette, Type, Layout, RotateCcw } from "lucide-react"

interface ThemeCustomizerProps {
  theme: ResumeTheme
  onThemeChange: (theme: ResumeTheme) => void
}

export function ThemeCustomizer({ theme, onThemeChange }: ThemeCustomizerProps) {
  const [activeTab, setActiveTab] = useState<"colors" | "fonts" | "layout">("colors")

  const handleColorChange = (colorKey: keyof ResumeTheme["colors"], value: string) => {
    onThemeChange({
      ...theme,
      colors: {
        ...theme.colors,
        [colorKey]: value,
      },
    })
  }

  const handleHexInput = (colorKey: keyof ResumeTheme["colors"], value: string) => {
    // Add # if not present
    if (value && !value.startsWith("#")) {
      value = "#" + value
    }

    // Validate hex color format
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    if (value === "" || hexRegex.test(value)) {
      handleColorChange(colorKey, value)
    }
  }

  const handleFontChange = (fontValue: string) => {
    const selectedFont = fontOptions.find((f) => f.value === fontValue)
    if (selectedFont) {
      onThemeChange({
        ...theme,
        fonts: {
          heading: selectedFont.heading,
          body: selectedFont.body,
        },
      })
    }
  }

  const applyPresetTheme = (presetKey: string) => {
    const preset = defaultThemes[presetKey]
    if (preset) {
      onThemeChange(preset)
    }
  }

  const applyColorPreset = (colors: any) => {
    onThemeChange({
      ...theme,
      colors: colors,
    })
  }

  const resetToDefault = () => {
    onThemeChange(defaultThemes.emerald)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold font-serif mb-4">Customize Theme</h3>
        <p className="text-sm text-muted-foreground mb-6">Personalize colors, fonts, and layout to match your style</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2">
        <Button
          variant={activeTab === "colors" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveTab("colors")}
        >
          <Palette className="h-4 w-4 mr-2" />
          Colors
        </Button>
        <Button variant={activeTab === "fonts" ? "default" : "outline"} size="sm" onClick={() => setActiveTab("fonts")}>
          <Type className="h-4 w-4 mr-2" />
          Fonts
        </Button>
        <Button
          variant={activeTab === "layout" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveTab("layout")}
        >
          <Layout className="h-4 w-4 mr-2" />
          Layout
        </Button>
      </div>

      {/* Colors Tab */}
      {activeTab === "colors" && (
        <div className="space-y-4">
          {/* Preset Themes */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Quick Themes</Label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(defaultThemes).map(([key, preset]) => (
                <Button
                  key={key}
                  variant="outline"
                  size="sm"
                  onClick={() => applyPresetTheme(key)}
                  className="justify-start"
                >
                  <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: preset.colors.primary }} />
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium mb-3 block">Color Presets</Label>
            <div className="grid grid-cols-3 gap-2">
              {colorPresets.map((preset, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => applyColorPreset(preset.colors)}
                  className="justify-start p-2"
                >
                  <div className="flex gap-1 mr-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: preset.colors.primary }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: preset.colors.accent }} />
                  </div>
                  <span className="text-xs">{preset.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Custom Colors */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primary-color">Primary Color</Label>
              <div className="flex gap-2">
                <input
                  id="primary-color"
                  type="color"
                  value={theme.colors.primary}
                  onChange={(e) => handleColorChange("primary", e.target.value)}
                  className="w-12 h-10 rounded border border-input"
                />
                <Input
                  value={theme.colors.primary}
                  onChange={(e) => handleHexInput("primary", e.target.value)}
                  placeholder="#000000"
                  className="flex-1 font-mono text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondary-color">Secondary Color</Label>
              <div className="flex gap-2">
                <input
                  id="secondary-color"
                  type="color"
                  value={theme.colors.secondary}
                  onChange={(e) => handleColorChange("secondary", e.target.value)}
                  className="w-12 h-10 rounded border border-input"
                />
                <Input
                  value={theme.colors.secondary}
                  onChange={(e) => handleHexInput("secondary", e.target.value)}
                  placeholder="#000000"
                  className="flex-1 font-mono text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="accent-color">Accent Color</Label>
              <div className="flex gap-2">
                <input
                  id="accent-color"
                  type="color"
                  value={theme.colors.accent}
                  onChange={(e) => handleColorChange("accent", e.target.value)}
                  className="w-12 h-10 rounded border border-input"
                />
                <Input
                  value={theme.colors.accent}
                  onChange={(e) => handleHexInput("accent", e.target.value)}
                  placeholder="#000000"
                  className="flex-1 font-mono text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="text-color">Text Color</Label>
              <div className="flex gap-2">
                <input
                  id="text-color"
                  type="color"
                  value={theme.colors.text}
                  onChange={(e) => handleColorChange("text", e.target.value)}
                  className="w-12 h-10 rounded border border-input"
                />
                <Input
                  value={theme.colors.text}
                  onChange={(e) => handleHexInput("text", e.target.value)}
                  placeholder="#000000"
                  className="flex-1 font-mono text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fonts Tab */}
      {activeTab === "fonts" && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Font Combination</Label>
            <Select onValueChange={handleFontChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select font combination" />
              </SelectTrigger>
              <SelectContent>
                {fontOptions.map((font) => (
                  <SelectItem key={font.value} value={font.value}>
                    {font.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">First font is for headings, second for body text</p>
          </div>

          {/* Font Preview */}
          <Card className="p-4">
            <div className="space-y-2">
              <h4 className={`text-lg font-bold ${theme.fonts.heading}`}>Heading Preview</h4>
              <p className={`text-sm ${theme.fonts.body}`}>
                This is how your body text will look in the resume. It should be clear and easy to read.
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* Layout Tab */}
      {activeTab === "layout" && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Section Spacing</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={theme.spacing.section === "mb-4" ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  onThemeChange({
                    ...theme,
                    spacing: { ...theme.spacing, section: "mb-4" },
                  })
                }
              >
                Compact
              </Button>
              <Button
                variant={theme.spacing.section === "mb-6" ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  onThemeChange({
                    ...theme,
                    spacing: { ...theme.spacing, section: "mb-6" },
                  })
                }
              >
                Normal
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Border Radius</Label>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant={theme.borderRadius === "rounded-none" ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  onThemeChange({
                    ...theme,
                    borderRadius: "rounded-none",
                  })
                }
              >
                Sharp
              </Button>
              <Button
                variant={theme.borderRadius === "rounded-lg" ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  onThemeChange({
                    ...theme,
                    borderRadius: "rounded-lg",
                  })
                }
              >
                Rounded
              </Button>
              <Button
                variant={theme.borderRadius === "rounded-xl" ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  onThemeChange({
                    ...theme,
                    borderRadius: "rounded-xl",
                  })
                }
              >
                Very Round
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Reset Button */}
      <div className="pt-4 border-t">
        <Button variant="outline" size="sm" onClick={resetToDefault} className="w-full bg-transparent">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset to Default
        </Button>
      </div>
    </div>
  )
}
