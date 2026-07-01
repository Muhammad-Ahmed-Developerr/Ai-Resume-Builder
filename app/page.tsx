
"use client"

import { useState, useEffect } from "react"
import { PersonalInfoForm } from "@/components/personal-info-form"
import { EducationForm } from "@/components/education-form"
import { ExperienceForm } from "@/components/experience-form"
import { SkillsForm } from "@/components/skills-form"
import { ProjectsForm } from "@/components/projects-form"
import { ServicesForm } from "@/components/services-form"
import { CertificatesForm } from "@/components/certificates-form"
import { LanguagesForm } from "@/components/languages-form" 
import { ResumePreview } from "@/components/resume-preview"
import { TemplateSelector } from "@/components/template-selector"
import { ThemeCustomizer } from "@/components/theme-customizer"
import { PDFDownloadButton } from "@/components/pdf-download-button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toaster } from "@/components/ui/toaster"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"

import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Zap, 
  FolderOpen, 
  Wrench, 
  Award, 
  Languages as LanguagesIcon,
  Palette,
  Download,
  Eye,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Smartphone
} from "lucide-react"
import type { ResumeTheme } from "@/lib/theme-types"
import { defaultThemes } from "@/lib/theme-types"
import { useIsMobile } from "@/hooks/use-mobile"

interface PersonalInfo {
  name: string
  title?: string
  email: string
  phone: string
  profileImage?: string
  summary?: string
  portfolio?: string
  github?: string
  linkedin?: string
}

export interface Education {
  id: string
  school: string
  degree: string
  startYear: string
  endYear: string
  gpa?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string
  description: string
  current: boolean
}

export interface Skill {
  id: string
  name: string
  proficiency: number
}

export interface Service {
  id: string
  name: string
  description: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  year: string
  description?: string
  image?: string
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  link?: string
}

export interface Language {
  id: string
  name: string
  proficiency: string
}

export interface ResumeData {
  personalInfo: PersonalInfo
  education: Education[]
  experience: Experience[]
  skills: Skill[]
  projects: Project[]
  services: Service[]
  certificates: Certificate[]
  languages: Language[]
}

export type ResumeTemplate =
  | "modern"
  | "creative"
  | "minimal"
  | "professional"
  | "elegant"
  | "geometric"
  | "layered"

const tabsConfig = [
  { id: "personal", label: "Personal", icon: User, color: "text-blue-600" },
  { id: "education", label: "Education", icon: GraduationCap, color: "text-green-600" },
  { id: "experience", label: "Experience", icon: Briefcase, color: "text-purple-600" },
  { id: "skills", label: "Skills", icon: Zap, color: "text-yellow-600" },
  { id: "services", label: "Services", icon: Wrench, color: "text-orange-600" },
  { id: "projects", label: "Projects", icon: FolderOpen, color: "text-indigo-600" },
  { id: "certificates", label: "Certificates", icon: Award, color: "text-red-600" },
  { id: "languages", label: "Languages", icon: LanguagesIcon, color: "text-teal-600" },
]

export default function ResumeBuilder() {
  const isMobile = useIsMobile()
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      summary: "",
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
    services: [],
    certificates: [],
    languages: [],
  })

  const [selectedTemplate, setSelectedTemplate] = useState<ResumeTemplate>("modern")
  const [currentTheme, setCurrentTheme] = useState<ResumeTheme>(defaultThemes.emerald)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [activeTab, setActiveTab] = useState("personal")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [previewScale, setPreviewScale] = useState(1)

  // Adjust preview scale based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (isMobile) {
        setPreviewScale(1)
      } else {
        const containerWidth = document.getElementById('preview-container')?.offsetWidth || 794
        const scale = Math.min(1, (containerWidth - 32) / 794) // 794px is A4 width
        setPreviewScale(scale)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

  const updatePersonalInfo = (info: PersonalInfo) => {
    setResumeData((prev) => ({ ...prev, personalInfo: info }))
  }

  const updateEducation = (education: Education[]) => {
    setResumeData((prev) => ({ ...prev, education }))
  }

  const updateExperience = (experience: Experience[]) => {
    setResumeData((prev) => ({ ...prev, experience }))
  }

  const updateSkills = (skills: Skill[]) => {
    setResumeData((prev) => ({ ...prev, skills }))
  }

  const updateProjects = (projects: Project[]) => {
    setResumeData((prev) => ({ ...prev, projects }))
  }

  const updateServices = (services: Service[]) => {
    setResumeData((prev) => ({ ...prev, services }))
  }

  const updateCertificates = (certificates: Certificate[]) => {
    setResumeData((prev) => ({ ...prev, certificates }))
  }

  const updateLanguages = (languages: Language[]) => {
    setResumeData((prev) => ({ ...prev, languages }))
  }

  const handlePDFGeneration = async () => {
    setIsGeneratingPDF(true)
    try {
      // Add any pre-generation logic here if needed
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  // Mobile tabs navigation
  const MobileTabsMenu = () => (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 shadow-lg">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-2xl h-3/4">
        <SheetTitle className="sr-only">Resume Sections</SheetTitle>
        <SheetDescription className="sr-only">Navigate between different resume sections</SheetDescription>
        <div className="grid grid-cols-2 gap-3 mt-6">
          {tabsConfig.map((tab) => {
            const Icon = tab.icon
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`flex flex-col h-20 ${activeTab === tab.id ? '' : 'bg-muted/50'}`}
                onClick={() => {
                  setActiveTab(tab.id)
                  setMobileMenuOpen(false)
                }}
              >
                <Icon className={`h-5 w-5 mb-1 ${tab.color}`} />
                <span className="text-xs font-medium">{tab.label}</span>
              </Button>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Enhanced Header */}
      <header className="relative overflow-hidden bg-white dark:bg-slate-900 border-b shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5" />
        <div className="relative container mx-auto px-4 py-6 md:py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="p-2 md:p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl md:rounded-2xl shadow-lg">
                <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Resume Builder Pro
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm md:text-base font-medium">
                  Create stunning professional resumes in minutes
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Eye className="h-4 w-4 mr-1" />
                Live Preview
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <Download className="h-4 w-4 mr-1" />
                PDF Export
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.2fr_1fr] gap-6 md:gap-8">
          {/* Enhanced Form Section */}
          <div className="space-y-6">
            {/* Template Selection Card */}
            <Card className="p-4 md:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl animate-fade-in">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <Palette className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Choose Your Template</h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Select from our premium collection</p>
                </div>
              </div>
              <TemplateSelector
                selectedTemplate={selectedTemplate}
                onTemplateChange={setSelectedTemplate}
              />
            </Card>

            {/* Theme Customization Card */}
            <Card className="p-4 md:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl animate-fade-in">
              <ThemeCustomizer theme={currentTheme} onThemeChange={setCurrentTheme} />
            </Card>

            {/* Enhanced Form Tabs */}
            <Card className="p-4 md:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl animate-fade-in">
              <Tabs defaultValue="personal" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="hidden md:grid w-full grid-cols-4 lg:grid-cols-8 gap-1 bg-slate-100 dark:bg-slate-700 p-1 rounded-xl">
                  {tabsConfig.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <TabsTrigger 
                        key={tab.id}
                        value={tab.id} 
                        className="flex flex-col items-center gap-1 p-3 rounded-lg data-[state=active]:bg-white data-[state=active]:dark:bg-slate-600 data-[state=active]:shadow-sm transition-all"
                      >
                        <Icon className={`h-4 w-4 ${tab.color}`} />
                        <span className="text-xs font-medium">{tab.label}</span>
                      </TabsTrigger>
                    )
                  })}
                </TabsList>

                <div className="mt-6 md:mt-8">
                  <TabsContent value="personal">
                    <PersonalInfoForm data={resumeData.personalInfo} onChange={updatePersonalInfo} />
                  </TabsContent>

                  <TabsContent value="education">
                    <EducationForm data={resumeData.education} onChange={updateEducation} />
                  </TabsContent>

                  <TabsContent value="experience">
                    <ExperienceForm data={resumeData.experience} onChange={updateExperience} />
                  </TabsContent>

                  <TabsContent value="skills">
                    <SkillsForm data={resumeData.skills} onChange={updateSkills} />
                  </TabsContent>

                  <TabsContent value="services">
                    <ServicesForm data={resumeData.services} onChange={updateServices} />
                  </TabsContent>

                  <TabsContent value="projects">
                    <ProjectsForm data={resumeData.projects} onChange={updateProjects} />
                  </TabsContent>

                  <TabsContent value="certificates">
                    <CertificatesForm data={resumeData.certificates} onChange={updateCertificates} />
                  </TabsContent>

                  <TabsContent value="languages">
                    <LanguagesForm data={resumeData.languages} onChange={updateLanguages} />
                  </TabsContent>
                </div>
              </Tabs>
            </Card>

            {/* Enhanced PDF Download Button */}
            <Card className="p-4 md:p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold">Ready to Download?</h3>
                  <p className="text-blue-100 text-sm">Export your professional resume as PDF</p>
                </div>
                <ArrowRight className="h-6 w-6 text-blue-200" />
              </div>
              <PDFDownloadButton
                resumeData={resumeData}
                template={selectedTemplate}
                theme={currentTheme}
                fileName={`${resumeData.personalInfo.name || "resume"}-${new Date()
                  .toISOString()
                  .slice(0, 10)}`}
              />
            </Card>
          </div>

          {/* Enhanced Preview Section */}
          <div id="preview-container" className={`${isMobile ? "" : "lg:sticky lg:top-8"} h-fit`}>
            <Card className="p-4 md:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl animate-fade-in">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                  <Eye className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">Live Preview</h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">See your resume in real-time</p>
                </div>
                {!isMobile && (
                  <Badge variant="outline" className="ml-auto hidden md:flex">
                    <Smartphone className="h-3 w-3 mr-1" />
                    Scroll to zoom
                  </Badge>
                )}
              </div>

              {/* Responsive A4 size for PDF stability */}
              <div
                className="bg-white dark:bg-slate-900 shadow-2xl rounded-lg overflow-hidden border mx-auto resume-preview-container transition-transform duration-300"
                style={{
                  width: isMobile ? "100%" : "794px",
                  height: isMobile ? "auto" : `${1123 * previewScale}px`,
                  transform: isMobile ? "none" : `scale(${previewScale})`,
                  transformOrigin: "top center",
                }}
              >
                <ResumePreview data={resumeData} template={selectedTemplate} theme={currentTheme} />
              </div>
              
              {isMobile && (
                <p className="text-xs text-center text-slate-500 mt-4">
                  Pinch to zoom or scroll horizontally to view details
                </p>
              )}
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <MobileTabsMenu />
      
      <Toaster />
    </div>
  )
}
