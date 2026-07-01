import type { ResumeData } from "@/app/page"
import type { ResumeTheme } from "@/lib/theme-types"
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

interface LayeredTemplateProps {
  data: ResumeData
  theme: ResumeTheme
}

const safeColor = (color: string) => color || "#000000"

export function LayeredTemplate({ data, theme }: LayeredTemplateProps) {
  const { personalInfo, education, experience, skills, projects, services, certificates, languages } = data

  return (
    <div
      className="w-full max-w-4xl mx-auto bg-white text-gray-900 shadow-lg relative overflow-hidden"
      style={{
        fontFamily: theme.fonts.body,
        color: safeColor(theme.colors.text),
      }}
    >
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-5"
          style={{ backgroundColor: safeColor(theme.colors.primary) }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/4 h-2/3 opacity-10"
          style={{ backgroundColor: safeColor(theme.colors.secondary) }}
        />
      </div>

      <div className="relative z-10">
        {/* Header Layer */}
        <div className="relative">
          <div
            className="absolute inset-0 opacity-95"
            style={{ backgroundColor: safeColor(theme.colors.primary) }}
          />
          <div className="relative z-10 p-8 text-white">
            <div className="flex items-center gap-6">
              {personalInfo.profileImage && (
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-full blur-sm opacity-50"
                      style={{ backgroundColor: safeColor(theme.colors.accent) }}
                    />
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="relative w-24 h-24 rounded-full object-cover border-4 border-white"
                    />
                  </div>
                </div>
              )}
              <div className="flex-1">
                <h1
                  className="text-4xl font-bold mb-2"
                  style={{ fontFamily: theme.fonts.heading }}
                >
                  {personalInfo.name}
                </h1>
                {personalInfo.title && (
                  <p className="text-xl text-white/90 mb-4">{personalInfo.title}</p>
                )}
                <div className="flex flex-wrap gap-6 text-white/90 mb-4">
                  {personalInfo.email && (
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                        {personalInfo.email}
                      </a>
                    </div>
                  )}
                  {personalInfo.phone && (
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
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
                  <p className="text-white/80 leading-relaxed">
                    {personalInfo.summary}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Layers */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content - 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              {/* Experience Layer */}
              {experience.length > 0 && (
                <section className="relative">
                  <div
                    className="absolute -left-4 top-0 w-1 h-full rounded opacity-30"
                    style={{ backgroundColor: safeColor(theme.colors.primary) }}
                  />
                  <h2
                    className="text-2xl font-bold mb-6 relative flex items-center gap-2"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: safeColor(theme.colors.primary),
                    }}
                  >
                    <Briefcase className="h-5 w-5" />
                    <span className="relative z-10 bg-white pr-4">
                      Professional Experience
                    </span>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px opacity-20"
                      style={{ backgroundColor: safeColor(theme.colors.primary) }}
                    />
                  </h2>
                  <div className="space-y-6">
                    {experience.map((exp) => (
                      <div key={exp.id} className="relative">
                        <div
                          className="absolute -left-8 top-6 w-4 h-4 rounded-full border-4 border-white shadow-md"
                          style={{ backgroundColor: safeColor(theme.colors.accent) }}
                        />
                        <div
                          className="bg-white p-6 rounded-lg shadow-sm border-l-4 relative"
                          style={{ borderColor: safeColor(theme.colors.secondary) }}
                        >
                          <div
                            className="absolute top-0 right-0 w-16 h-16 opacity-5 rounded-bl-full"
                            style={{ backgroundColor: safeColor(theme.colors.primary) }}
                          />
                          <h3 className="font-bold text-xl mb-1">{exp.role}</h3>
                          <p
                            className="font-semibold text-lg mb-2"
                            style={{ color: safeColor(theme.colors.primary) }}
                          >
                            {exp.company}
                          </p>
                          <p
                            className="text-sm mb-4"
                            style={{ color: safeColor(theme.colors.secondary) }}
                          >
                            {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                          </p>
                          <p className="leading-relaxed">{exp.description}</p>
                        </div>
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

              {/* Services Layer */}
              {services.length > 0 && (
                <section className="relative">
                  <div
                    className="absolute -left-4 top-0 w-1 h-full rounded opacity-30"
                    style={{ backgroundColor: safeColor(theme.colors.accent) }}
                  />
                  <h2
                    className="text-2xl font-bold mb-6 relative flex items-center gap-2"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: safeColor(theme.colors.primary),
                    }}
                  >
                    <Wrench className="h-5 w-5" />
                    <span className="relative z-10 bg-white pr-4">
                      Services
                    </span>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px opacity-20"
                      style={{ backgroundColor: safeColor(theme.colors.primary) }}
                    />
                  </h2>
                  <div className="grid gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className="bg-white p-4 rounded-lg shadow-sm border-l-4 relative"
                        style={{ borderColor: safeColor(theme.colors.accent) }}
                      >
                        <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                        {service.description && (
                          <p className="leading-relaxed">{service.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-8">
              {/* Education Layer */}
              {education.length > 0 && (
                <section className="relative">
                  <div
                    className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden"
                    style={{ borderTop: `4px solid ${safeColor(theme.colors.primary)}` }}
                  >
                    <div
                      className="absolute -top-2 -right-2 w-16 h-16 opacity-10 rounded-full"
                      style={{ backgroundColor: safeColor(theme.colors.primary) }}
                    />
                    <h2
                      className="text-lg font-bold mb-4 relative z-10 flex items-center gap-2"
                      style={{
                        fontFamily: theme.fonts.heading,
                        color: safeColor(theme.colors.primary),
                      }}
                    >
                      <GraduationCap className="h-4 w-4" />
                      Education
                    </h2>
                    <div className="space-y-4">
                      {education.map((edu) => (
                        <div key={edu.id} className="relative">
                          <h3 className="font-semibold text-sm">{edu.degree}</h3>
                          <p
                            className="text-sm font-medium"
                            style={{ color: safeColor(theme.colors.primary) }}
                          >
                            {edu.school}
                          </p>
                          <p
                            className="text-xs"
                            style={{ color: safeColor(theme.colors.secondary) }}
                          >
                            {edu.startYear} - {edu.endYear}
                          </p>
                          {edu.gpa && <p className="text-xs">GPA: {edu.gpa}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Skills Layer */}
              {skills.length > 0 && (
                <section className="relative">
                  <div
                    className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden"
                    style={{ borderTop: `4px solid ${safeColor(theme.colors.secondary)}` }}
                  >
                    <div
                      className="absolute -bottom-2 -left-2 w-12 h-12 opacity-10 rounded-full"
                      style={{ backgroundColor: safeColor(theme.colors.secondary) }}
                    />
                    <h2
                      className="text-lg font-bold mb-4 relative z-10 flex items-center gap-2"
                      style={{
                        fontFamily: theme.fonts.heading,
                        color: safeColor(theme.colors.primary),
                      }}
                    >
                      <Zap className="h-4 w-4" />
                      Skills & Expertise
                    </h2>
                    <div className="space-y-4">
                      {skills.map((skill) => (
                        <div key={skill.id} className="relative">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold">
                              {skill.name}
                            </span>
                            <span
                              className="text-xs"
                              style={{ color: safeColor(theme.colors.secondary) }}
                            >
                              {skill.proficiency}%
                            </span>
                          </div>
                          <div className="relative">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="h-2 rounded-full transition-all duration-500 relative overflow-hidden"
                                style={{
                                  width: `${skill.proficiency}%`,
                                  backgroundColor: safeColor(theme.colors.accent),
                                }}
                              >
                                <div
                                  className="absolute inset-0 opacity-30"
                                  style={{
                                    backgroundColor: safeColor(theme.colors.primary),
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Certificates Layer */}
              {certificates.length > 0 && (
                <section className="relative">
                  <div
                    className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden"
                    style={{ borderTop: `4px solid ${safeColor(theme.colors.accent)}` }}
                  >
                    <h2
                      className="text-lg font-bold mb-4 relative z-10 flex items-center gap-2"
                      style={{
                        fontFamily: theme.fonts.heading,
                        color: safeColor(theme.colors.primary),
                      }}
                    >
                      <Award className="h-4 w-4" />
                      Certificates
                    </h2>
                    <div className="space-y-3">
                      {certificates.map((cert) => (
                        <div key={cert.id}>
                          <h3 className="font-semibold text-sm">{cert.title}</h3>
                          <p
                            className="text-sm"
                            style={{ color: safeColor(theme.colors.primary) }}
                          >
                            {cert.issuer}
                          </p>
                          <p
                            className="text-xs"
                            style={{ color: safeColor(theme.colors.secondary) }}
                          >
                            {cert.year}
                          </p>
                          {cert.description && (
                            <p className="text-xs">{cert.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Languages Layer */}
              {languages.length > 0 && (
                <section className="relative">
                  <div
                    className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden"
                    style={{ borderTop: `4px solid ${safeColor(theme.colors.primary)}` }}
                  >
                    <h2
                      className="text-lg font-bold mb-4 relative z-10 flex items-center gap-2"
                      style={{
                        fontFamily: theme.fonts.heading,
                        color: safeColor(theme.colors.primary),
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
                            style={{ color: safeColor(theme.colors.primary) }}
                          >
                            {lang.proficiency}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </div>
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
            <p className="text-lg mb-2">Your layered resume will appear here</p>
            <p className="text-sm">Dynamic design with layered elements and depth</p>
          </div>
        )}
    </div>
  )
}