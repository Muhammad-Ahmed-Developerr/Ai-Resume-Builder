"use client"

import type { ResumeData } from "@/app/page"
import type { ResumeTheme } from "@/lib/theme-types"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Calendar,
  ExternalLink,
  Star,
  Globe,
  Github,
  Linkedin,
  Award,
  Briefcase,
  User,
  FileText,
  GraduationCap,
  Zap,
  Wrench,
  FolderOpen,
  Languages,
} from "lucide-react"

interface CreativeTemplateProps {
  data: ResumeData
  theme: ResumeTheme
}

export function CreativeTemplate({ data, theme }: CreativeTemplateProps) {
  const { personalInfo, education, experience, skills, projects, services, certificates, languages } = data

  const getSkillStars = (proficiency: number) => {
    const stars = Math.round(proficiency / 20)
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className="h-4 w-4 transition-colors"
        style={{
          color: i < stars ? theme.colors.primary : "#d1d5db",
          fill: i < stars ? theme.colors.primary : "none",
        }}
      />
    ))
  }

  return (
    <div
      className="text-gray-900 p-6 md:p-10 space-y-10"
      style={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.secondary}20 100%)`,
      }}
    >
      {/* Creative Header */}
      <div className="relative">
        <div
          className="absolute inset-0 rounded-3xl transform rotate-1 opacity-90 blur-sm"
          style={{ backgroundColor: theme.colors.primary }}
        ></div>
        <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {personalInfo.profileImage && (
              <img
                src={personalInfo.profileImage}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 shadow-lg"
                style={{ borderColor: theme.colors.primary }}
              />
            )}
            <div className="flex-1">
              <h1
                className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight"
                style={{
                  color: theme.colors.primary,
                  fontFamily: theme.fonts.heading === "font-serif" ? "serif" : theme.fonts.heading === "font-mono" ? "monospace" : "sans-serif",
                }}
              >
                {personalInfo.name || "Your Name"}
              </h1>
              {personalInfo.title && (
                <p className="text-xl font-semibold mb-4 text-muted-foreground">
                  {personalInfo.title}
                </p>
              )}
              <div className="flex flex-wrap gap-4 text-sm">
                {personalInfo.email && (
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-1 hover:underline"
                    style={{ color: theme.colors.text }}
                  >
                    <Mail className="h-4 w-4" style={{ color: theme.colors.primary }} />
                    {personalInfo.email}
                  </a>
                )}
                {personalInfo.phone && (
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-1 hover:underline"
                    style={{ color: theme.colors.text }}
                  >
                    <Phone className="h-4 w-4" style={{ color: theme.colors.primary }} />
                    {personalInfo.phone}
                  </a>
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
      </div>

      {/* About Me */}
      {personalInfo.summary && (
        <section className="bg-white/80 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <FileText className="h-5 w-5" style={{ color: theme.colors.primary }} />
            About Me
          </h2>
          <p className="leading-relaxed" style={{ color: theme.colors.text }}>
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="bg-white/80 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <GraduationCap className="h-5 w-5" style={{ color: theme.colors.primary }} />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-4 pl-4" style={{ borderColor: theme.colors.primary }}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: theme.colors.text }}>
                      {edu.degree}
                    </h3>
                    <p className="font-medium" style={{ color: theme.colors.primary }}>
                      {edu.school}
                    </p>
                    {edu.gpa && (
                      <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {edu.startYear} - {edu.endYear}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5" style={{ color: theme.colors.primary }} />
            Experience
          </h2>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-white/80 rounded-xl p-6 shadow-lg border-l-4"
                style={{ borderColor: theme.colors.primary }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: theme.colors.text }}>
                      {exp.role}
                    </h3>
                    <p className="font-medium" style={{ color: theme.colors.primary }}>
                      {exp.company}
                    </p>
                  </div>
                  <div
                    className="text-sm flex items-center gap-1"
                    style={{ color: theme.colors.textLight }}
                  >
                    <Calendar className="h-4 w-4" />
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </div>
                </div>
                {exp.description && (
                  <p className="leading-relaxed text-sm mt-2" style={{ color: theme.colors.text }}>
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5" style={{ color: theme.colors.primary }} />
            Skills
          </h2>
          <div className="bg-white/80 rounded-xl p-6 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.id} className="flex justify-between items-center">
                <span className="font-medium" style={{ color: theme.colors.text }}>
                  {skill.name}
                </span>
                <div className="flex gap-1">{getSkillStars(skill.proficiency)}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Services */}
      {services.length > 0 && (
        <section className="bg-white/80 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Wrench className="h-5 w-5" style={{ color: theme.colors.primary }} />
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div key={service.id}>
                <h3 className="font-semibold text-lg" style={{ color: theme.colors.text }}>
                  {service.name}
                </h3>
                {service.description && (
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

     
{projects.length > 0 && (
  <section>
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
  </section>
)}

      {/* Certificates */}
      {certificates.length > 0 && (
        <section className="bg-white/80 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5" style={{ color: theme.colors.primary }} />
            Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <div key={cert.id}>
                <h3 className="font-semibold text-lg" style={{ color: theme.colors.text }}>
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                {cert.year && (
                  <p className="text-xs text-muted-foreground">Issued: {cert.year}</p>
                )}
                {cert.description && (
                  <p className="text-sm mt-1" style={{ color: theme.colors.text }}>
                    {cert.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section className="bg-white/80 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Languages className="h-5 w-5" style={{ color: theme.colors.primary }} />
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
        </section>
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
            <p className="text-lg mb-2">Your creative resume will appear here</p>
            <p className="text-sm">Bold design with creative elements and visual flair</p>
          </div>
        )}
    </div>
  )
}