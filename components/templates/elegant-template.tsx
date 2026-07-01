import { 
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
  Linkedin,
  Mail,
  Phone
} from "lucide-react"
import type { ResumeData } from "@/app/page"
import type { ResumeTheme } from "@/lib/theme-types"

interface ElegantTemplateProps {
  data: ResumeData
  theme: ResumeTheme
}

export function ElegantTemplate({ data, theme }: ElegantTemplateProps) {
  const { personalInfo, education, experience, skills, projects, services, certificates, languages } = data

  return (
    <div
      className="w-full max-w-4xl mx-auto bg-white text-gray-900 shadow-lg"
      style={{
        fontFamily: theme.fonts.body,
        color: theme.colors.text,
      }}
    >
      {/* Header with elegant side accent */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 w-2 h-full"
          style={{ backgroundColor: theme.colors.primary }}
        />
        <div className="pl-8 pr-6 py-8">
          <div className="flex items-start gap-6">
            {personalInfo.profileImage && (
              <div className="flex-shrink-0">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-24 h-24 rounded-full object-cover border-4"
                  style={{ borderColor: theme.colors.primary }}
                />
              </div>
            )}
            <div className="flex-1">
              <h1
                className="text-4xl font-light mb-2"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: theme.colors.primary,
                }}
              >
                {personalInfo.name}
              </h1>
              {personalInfo.title && (
                <p className="text-lg font-medium mb-4" style={{ color: theme.colors.text }}>
                  {personalInfo.title}
                </p>
              )}
              <div className="flex flex-wrap gap-4 text-sm mb-4">
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
              {personalInfo.summary && (
                <p className="text-sm leading-relaxed">{personalInfo.summary}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 pb-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            {/* Experience */}
            {experience.length > 0 && (
              <section>
                <h2
                  className="text-xl font-light mb-4 pb-2 border-b flex items-center gap-2"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                    borderColor: theme.colors.secondary,
                  }}
                >
                  <Briefcase className="h-5 w-5" />
                  Professional Experience
                </h2>
                <div className="space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.id} className="relative pl-4">
                      <div
                        className="absolute left-0 top-2 w-2 h-2 rounded-full"
                        style={{ backgroundColor: theme.colors.accent }}
                      />
                      <h3 className="font-medium text-lg">{exp.role}</h3>
                      <p
                        className="font-medium mb-1"
                        style={{ color: theme.colors.primary }}
                      >
                        {exp.company}
                      </p>
                      <p
                        className="text-sm mb-2"
                        style={{ color: theme.colors.secondary }}
                      >
                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                      </p>
                      <p className="text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
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

            {/* Services */}
            {services.length > 0 && (
              <section>
                <h2
                  className="text-xl font-light mb-4 pb-2 border-b flex items-center gap-2"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                    borderColor: theme.colors.secondary,
                  }}
                >
                  <Wrench className="h-5 w-5" />
                  Services
                </h2>
                <div className="space-y-3">
                  {services.map((service) => (
                    <div key={service.id} className="relative pl-4">
                      <div
                        className="absolute left-0 top-2 w-2 h-2 rounded-full"
                        style={{ backgroundColor: theme.colors.accent }}
                      />
                      <h3 className="font-medium">{service.name}</h3>
                      {service.description && (
                        <p className="text-sm leading-relaxed">{service.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Education */}
            {education.length > 0 && (
              <section>
                <h2
                  className="text-lg font-light mb-4 pb-2 border-b flex items-center gap-2"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                    borderColor: theme.colors.secondary,
                  }}
                >
                  <GraduationCap className="h-4 w-4" />
                  Education
                </h2>
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <h3 className="font-medium text-sm">{edu.degree}</h3>
                      <p
                        className="text-sm"
                        style={{ color: theme.colors.primary }}
                      >
                        {edu.school}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: theme.colors.secondary }}
                      >
                        {edu.startYear} - {edu.endYear}
                      </p>
                      {edu.gpa && <p className="text-xs">GPA: {edu.gpa}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Skills */}
            {skills.length > 0 && (
              <section>
                <h2
                  className="text-lg font-light mb-4 pb-2 border-b flex items-center gap-2"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                    borderColor: theme.colors.secondary,
                  }}
                >
                  <Zap className="h-4 w-4" />
                  Skills
                </h2>
                <div className="space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: theme.colors.secondary }}
                        >
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full transition-all duration-300"
                          style={{
                            width: `${skill.proficiency}%`,
                            backgroundColor: theme.colors.accent,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Certificates */}
            {certificates.length > 0 && (
              <section>
                <h2
                  className="text-lg font-light mb-4 pb-2 border-b flex items-center gap-2"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                    borderColor: theme.colors.secondary,
                  }}
                >
                  <Award className="h-4 w-4" />
                  Certificates
                </h2>
                <div className="space-y-3">
                  {certificates.map((cert) => (
                    <div key={cert.id}>
                      <h3 className="font-medium text-sm">{cert.title}</h3>
                      <p
                        className="text-sm"
                        style={{ color: theme.colors.primary }}
                      >
                        {cert.issuer}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: theme.colors.secondary }}
                      >
                        {cert.year}
                      </p>
                      {cert.description && (
                        <p className="text-xs">{cert.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Languages */}
            {languages.length > 0 && (
              <section>
                <h2
                  className="text-lg font-light mb-4 pb-2 border-b flex items-center gap-2"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                    borderColor: theme.colors.secondary,
                  }}
                >
                  <Languages className="h-4 w-4" />
                  Languages
                </h2>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <div key={lang.id} className="flex justify-between">
                      <span className="text-sm font-medium">{lang.name}</span>
                      <span
                        className="text-xs"
                        style={{ color: theme.colors.primary }}
                      >
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

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
            <p className="text-lg mb-2">Your elegant resume will appear here</p>
            <p className="text-sm">Sophisticated design with refined typography</p>
          </div>
        )}
    </div>
  )
}