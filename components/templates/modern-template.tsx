"use client"

import type { ResumeData } from "@/app/page"
import type { ResumeTheme } from "@/lib/theme-types"
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

interface ModernTemplateProps {
  data: ResumeData
  theme: ResumeTheme
}

export function ModernTemplate({ data, theme }: ModernTemplateProps) {
  const { personalInfo, education, experience, skills, projects, services, certificates, languages } = data

  return (
    <div className="bg-white text-gray-900 p-8" style={{ minHeight: "800px" }}>
      {/* Header Section */}
      <div className="pb-8 mb-8" style={{ borderBottom: `4px solid ${theme.colors.primary}` }}>
        <div className="flex items-start gap-6 mb-6">
          {personalInfo.profileImage && (
            <div className="flex-shrink-0">
              <img
                src={personalInfo.profileImage}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 shadow-lg"
                style={{ borderColor: theme.colors.primary }}
              />
            </div>
          )}
          <div className="flex-1">
            <h1
              className="text-4xl font-black mb-2"
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
              }}
            >
              {personalInfo.name || "Your Name"}
            </h1>
            {personalInfo.title && (
              <p className="text-xl font-semibold mb-4" style={{ color: theme.colors.primary }}>
                {personalInfo.title}
              </p>
            )}
            <div className="flex flex-wrap gap-4 text-sm" style={{ color: theme.colors.textLight }}>
              {personalInfo.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" style={{ color: theme.colors.primary }} />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-2">
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

      {/* About/Summary Section */}
      {personalInfo.summary && (
        <div className="mb-8">
          <h2
            className="text-xl font-bold mb-4 pl-3 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              borderLeft: `4px solid ${theme.colors.primary}`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <FileText className="h-5 w-5" />
            About Me
          </h2>
          <p
            className="leading-relaxed text-base"
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.body === "font-serif" ? "serif" : theme.fonts.body === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <div className="mb-8">
          <h2
            className="text-xl font-bold mb-4 pl-3 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              borderLeft: `4px solid ${theme.colors.primary}`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <GraduationCap className="h-5 w-5" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="pl-4 relative" style={{ borderLeft: `2px solid ${theme.colors.secondary}` }}>
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: theme.colors.text }}>
                      {edu.degree}
                    </h3>
                    <p className="font-medium" style={{ color: theme.colors.primary }}>
                      {edu.school}
                    </p>
                    {edu.gpa && (
                      <p className="text-sm" style={{ color: theme.colors.textLight }}>
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                  <div className="text-sm flex items-center gap-1" style={{ color: theme.colors.textLight }}>
                    <Calendar className="h-4 w-4" />
                    {edu.startYear} - {edu.endYear}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience Section */}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2
            className="text-xl font-bold mb-4 pl-3 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              borderLeft: `4px solid ${theme.colors.primary}`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <Briefcase className="h-5 w-5" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="pl-4 relative" style={{ borderLeft: `2px solid ${theme.colors.secondary}` }}>
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: theme.colors.text }}>
                      {exp.role}
                    </h3>
                    <p className="font-medium" style={{ color: theme.colors.primary }}>
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
                    className="text-sm leading-relaxed whitespace-pre-line"
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

      {/* Skills Section */}
      {skills.length > 0 && (
        <div className="mb-8">
          <h2
            className="text-xl font-bold mb-4 pl-3 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              borderLeft: `4px solid ${theme.colors.primary}`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <Zap className="h-5 w-5" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium" style={{ color: theme.colors.text }}>
                    {skill.name}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: theme.colors.primary }}>
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${skill.proficiency}%`,
                      backgroundColor: theme.colors.primary,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Services Section */}
      {services.length > 0 && (
        <div className="mb-8">
          <h2
            className="text-xl font-bold mb-4 pl-3 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              borderLeft: `4px solid ${theme.colors.primary}`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <Wrench className="h-5 w-5" />
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div key={service.id} className="p-4 rounded-lg border" style={{ borderColor: theme.colors.secondary }}>
                <h3 className="font-semibold text-lg mb-2" style={{ color: theme.colors.text }}>
                  {service.name}
                </h3>
                <p className="text-sm" style={{ color: theme.colors.textLight }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects Section */}
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

      {/* Certificates Section */}
      {certificates.length > 0 && (
        <div className="mb-8">
          <h2
            className="text-xl font-bold mb-4 pl-3 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              borderLeft: `4px solid ${theme.colors.primary}`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <Award className="h-5 w-5" />
            Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <div key={cert.id} className="p-4 rounded-lg border" style={{ borderColor: theme.colors.secondary }}>
                <h3 className="font-semibold text-lg mb-1" style={{ color: theme.colors.text }}>
                  {cert.title}
                </h3>
                <p className="font-medium mb-1" style={{ color: theme.colors.primary }}>
                  {cert.issuer}
                </p>
                <p className="text-sm mb-2" style={{ color: theme.colors.textLight }}>
                  {cert.year}
                </p>
                {cert.description && (
                  <p className="text-sm" style={{ color: theme.colors.text }}>
                    {cert.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages Section */}
      {languages.length > 0 && (
        <div className="mb-8">
          <h2
            className="text-xl font-bold mb-4 pl-3 flex items-center gap-2"
            style={{
              color: theme.colors.primary,
              borderLeft: `4px solid ${theme.colors.primary}`,
              fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
            }}
          >
            <Languages className="h-5 w-5" />
            Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {languages.map((lang) => (
              <div key={lang.id} className="text-center p-3 rounded-lg" style={{ backgroundColor: `${theme.colors.primary}10` }}>
                <h3 className="font-semibold" style={{ color: theme.colors.text }}>
                  {lang.name}
                </h3>
                <p className="text-sm" style={{ color: theme.colors.primary }}>
                  {lang.proficiency}
                </p>
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
            <p className="text-lg mb-2">Your resume preview will appear here</p>
            <p className="text-sm">Start filling out the form to see your resume come to life!</p>
          </div>
        )}
    </div>
  )
}