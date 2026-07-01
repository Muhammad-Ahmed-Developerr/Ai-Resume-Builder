"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import type { PersonalInfo } from "@/app/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Upload, User, X } from "lucide-react"

interface PersonalInfoFormProps {
  data: PersonalInfo
  onChange: (data: PersonalInfo) => void
}

export function PersonalInfoForm({ data, onChange }: PersonalInfoFormProps) {
  const [formData, setFormData] = useState<PersonalInfo>(data)
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    onChange(formData)
  }, [formData])

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size must be less than 2MB")
        return
      }

      if (!file.type.startsWith("image/")) {
        alert("Please select an image file")
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string
        setProfileImage(imageUrl)
        handleChange("profileImage", imageUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setProfileImage(null)
    handleChange("profileImage", "")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold font-serif mb-4">Personal Information</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Add your basic contact information and professional summary
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        {/* Professional Title */}
        <div className="space-y-2">
          <Label htmlFor="title">Professional Title *</Label>
          <Input
          id="title"
          placeholder="Software Engineer / Web Developer"
          value={formData.title || ""}
          onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>


        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        {/* Portfolio Website */}
        <div className="space-y-2">
          <Label htmlFor="portfolio">Portfolio Website</Label>
          <Input
            id="portfolio"
            type="url"
            placeholder="https://your-portfolio.com"
            value={formData.portfolio || ""}
            onChange={(e) => handleChange("portfolio", e.target.value)}
          />
        </div>

        {/* GitHub */}
        <div className="space-y-2">
          <Label htmlFor="github">GitHub</Label>
          <Input
            id="github"
            type="url"
            placeholder="https://github.com/username"
            value={formData.github || ""}
            onChange={(e) => handleChange("github", e.target.value)}
          />
        </div>

        {/* LinkedIn */}
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            type="url"
            placeholder="https://linkedin.com/in/username"
            value={formData.linkedin || ""}
            onChange={(e) => handleChange("linkedin", e.target.value)}
          />
        </div>

        {/* Profile Picture */}
        <div className="space-y-2">
          <Label htmlFor="profile-picture">Profile Picture</Label>
          <Card className="p-4 border-dashed border-2 hover:border-primary/50 transition-colors">
            {profileImage || formData.profileImage ? (
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <img
                    src={profileImage || formData.profileImage}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover border-2 border-border"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                    onClick={removeImage}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
                  <Upload className="h-4 w-4 mr-2" />
                  Change Photo
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 text-center">
                <User className="h-8 w-8 text-muted-foreground" />
                <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Photo
                </Button>
                <p className="text-xs text-muted-foreground">Optional: JPG, PNG up to 2MB</p>
              </div>
            )}
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </Card>
        </div>
      </div>

      {/* Summary */}
      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          placeholder="Write a brief professional summary highlighting your key skills and experience..."
          rows={4}
          value={formData.summary}
          onChange={(e) => handleChange("summary", e.target.value)}
        />
        <p className="text-xs text-muted-foreground">
          2-3 sentences describing your professional background and career goals
        </p>
      </div>
    </div>
  )
}
