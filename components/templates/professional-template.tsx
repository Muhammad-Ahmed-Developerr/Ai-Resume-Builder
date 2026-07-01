"use client"

import type { ResumeData } from "@/app/page"
import type { ResumeTheme } from "@/lib/theme-types"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  Calendar, 
  ExternalLink, 
  User, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Zap, 
  Wrench, 
  FolderOpen, 
  Award, 
  Languages,
  Globe,
  Github,
  Linkedin
} from "lucide-react"

interface ProfessionalTemplateProps {
  data: ResumeData
  theme: ResumeTheme
}

export function ProfessionalTemplate({ data, theme }: ProfessionalTemplateProps) {
  const { personalInfo, education, experience, skills, projects, services, certificates, languages } = data

  return (
    <div className="bg-white text-gray-900 p-8" style={{ minHeight: "800px" }}>
      {/* Professional Header */}
      <div className="pb-4 mb-6" style={{ borderBottom: `2px solid ${theme.colors.primary}` }}>
        <div className="flex items-start gap-6 mb-4">
          {personalInfo.profileImage && (
            <div className="flex-shrink-0">
              <img
                src={personalInfo.profileImage}
                alt="Profile"
                className="w-20 h-20 rounded-lg object-cover border-2"
                style={{ borderColor: theme.colors.primary }}
              />
            </div>
          )}
          <div className="flex-1">
            <h1
              className="text-3xl font-bold mb-2"
              style={{
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
              }}
            >
              {personalInfo.name || "Your Name"}
            </h1>
            {personalInfo.title && (
              <p className="text-lg font-semibold mb-3" style={{ color: theme.colors.text }}>
                {personalInfo.title}
              </p>
            )}
            <div className="flex flex-wrap gap-4 text-sm" style={{ color: theme.colors.textLight }}>
              {personalInfo.email && (
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" style={{ color: theme.colors.primary }} />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" style={{ color: theme.colors.primary }} />
                  <a href={`tel:${personalInfo.phone}`} className="hover:underline">
                    {personalInfo.phone}
                  </a>
                </div>
              )}
              {personalInfo.portfolio && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-1" style={{ color: theme.colors.primary }} />
              <a href={personalInfo.portfolio} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {personalInfo.portfolio}
              </a>
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center">
              <Github className="h-4 w-4 mr-1" style={{ color: theme.colors.primary }} />
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {personalInfo.github}
              </a>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1" style={{ color: theme.colors.primary }} />
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {personalInfo.linkedin}
              </a>
            </div>
          )}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2
            className="text-lg font-bold mb-3 px-3 py-1 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              backgroundColor: `${theme.colors.primary}10`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <FileText className="h-4 w-4" />
            PROFESSIONAL SUMMARY
          </h2>
          <p
            className="leading-relaxed"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.body === "font-serif" ? "serif" : theme.fonts.body === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-lg font-bold mb-4 px-3 py-1 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              backgroundColor: `${theme.colors.primary}10`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <GraduationCap className="h-4 w-4" />
            EDUCATION
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold" style={{ color: theme.colors.text }}>
                    {edu.degree}
                  </h3>
                  <p style={{ color: theme.colors.primary }}>{edu.school}</p>
                  {edu.gpa && (
                    <p className="text-sm" style={{ color: theme.colors.textLight }}>
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
                <div className="text-sm" style={{ color: theme.colors.textLight }}>
                  {edu.startYear} - {edu.endYear}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-lg font-bold mb-4 px-3 py-1 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              backgroundColor: `${theme.colors.primary}10`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <Briefcase className="h-4 w-4" />
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id} className="pl-4" style={{ borderLeft: `4px solid ${theme.colors.secondary}` }}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-base" style={{ color: theme.colors.text }}>
                      {exp.role}
                    </h3>
                    <p className="font-semibold" style={{ color: theme.colors.primary }}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-sm flex items-center gap-1" style={{ color: theme.colors.textLight }}>
                    <Calendar className="h-4 w-4" />
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </div>
                </div>
                {exp.description && (
                  <div
                    className="text-sm leading-relaxed whitespace-pre-line mt-2"
                    style={{
                      color: theme.colors.text,
                      fontFamily: theme.fonts.body === "font-serif" ? "serif" : theme.fonts.body === "font-mono" ? "monospace" : "sans-serif",
                    }}
                  >
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-lg font-bold mb-4 px-3 py-1 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              backgroundColor: `${theme.colors.primary}10`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <Zap className="h-4 w-4" />
            CORE COMPETENCIES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {skills.map((skill) => (
              <div key={skill.id} className="text-sm">
                <span className="font-medium" style={{ color: theme.colors.text }}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Services */}
      {services.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-lg font-bold mb-4 px-3 py-1 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              backgroundColor: `${theme.colors.primary}10`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <Wrench className="h-4 w-4" />
            SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((service) => (
              <div key={service.id}>
                <h3 className="font-semibold" style={{ color: theme.colors.text }}>
                  {service.name}
                </h3>
                {service.description && (
                  <p className="text-sm" style={{ color: theme.colors.textLight }}>
                    {service.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-xl font-bold ${theme.fonts.heading} mb-4`} style={{ color: theme.colors.primary }}>
            Projects
          </h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">{project.name}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:underline">
                    <ExternalLink className="h-3 w-3 mr-1" style={{ color: theme.colors.primary }} />
                    {project.link}
                  </a>
                )}
              </div>
              <p className="text-sm mt-1" style={{ color: theme.colors.textLight }}>
                {project.description}
              </p>
              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: `${theme.colors.accent}20`, color: theme.colors.accent }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {/* Certificates */}
      {certificates.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-lg font-bold mb-4 px-3 py-1 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              backgroundColor: `${theme.colors.primary}10`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <Award className="h-4 w-4" />
            CERTIFICATIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certificates.map((cert) => (
              <div key={cert.id}>
                <h3 className="font-semibold" style={{ color: theme.colors.text }}>
                  {cert.title}
                </h3>
                <p className="text-sm" style={{ color: theme.colors.primary }}>
                  {cert.issuer} • {cert.year}
                </p>
                {cert.description && (
                  <p className="text-sm" style={{ color: theme.colors.textLight }}>
                    {cert.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-lg font-bold mb-4 px-3 py-1 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              backgroundColor: `${theme.colors.primary}10`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <Languages className="h-4 w-4" />
            LANGUAGES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {languages.map((lang) => (
              <div key={lang.id}>
                <span className="font-medium" style={{ color: theme.colors.text }}>
                  {lang.name}
                </span>
                <span className="text-sm ml-2" style={{ color: theme.colors.primary }}>
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!personalInfo.name &&
        experience.length === 0 &&
        education.length === 0 &&
        skills.length === 0 &&
        projects.length === 0 &&
        services.length === 0 &&
        certificates.length === 0 &&
        languages.length === 0 && (
          <div className="text-center py-12" style={{ color: theme.colors.textLight }}>
            <User className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg mb-2">Your professional resume will appear here</p>
            <p className="text-sm">Traditional corporate design for formal applications</p>
          </div>
        )}
    </div>
  )
}