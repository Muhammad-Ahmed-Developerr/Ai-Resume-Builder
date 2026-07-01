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

interface GeometricTemplateProps {
  data: ResumeData
  theme: ResumeTheme
}

export function GeometricTemplate({ data, theme }: GeometricTemplateProps) {
  const { personalInfo, education, experience, skills, projects, services, certificates, languages } = data

  return (
    <div
      className="w-full max-w-4xl mx-auto bg-white text-gray-900 shadow-lg overflow-hidden"
      style={{
        fontFamily: theme.fonts.body,
        color: theme.colors.text,
      }}
    >
      {/* Geometric Header */}
      <div className="relative">
        <div
          className="h-32 relative overflow-hidden"
          style={{ backgroundColor: theme.colors.primary }}
        >
          {/* Geometric shapes */}
          <div
            className="absolute -top-8 -right-8 w-24 h-24 rotate-45"
            style={{ backgroundColor: theme.colors.accent, opacity: 0.3 }}
          />
          <div
            className="absolute top-4 right-16 w-16 h-16 rounded-full"
            style={{ backgroundColor: theme.colors.secondary, opacity: 0.4 }}
          />
          <div
            className="absolute bottom-0 left-0 w-0 h-0 border-l-[60px] border-r-[60px] border-b-[40px]"
            style={{
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderBottomColor: theme.colors.accent,
              opacity: 0.5,
            }}
          />
        </div>

        <div className="absolute bottom-4 left-6 right-6 flex items-end gap-6">
          {personalInfo.profileImage && (
            <div className="flex-shrink-0">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-20 h-20 rounded-lg object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}
          <div className="flex-1 pb-2">
            <h1
              className="text-3xl font-bold text-white mb-1"
              style={{ fontFamily: theme.fonts.heading }}
            >
              {personalInfo.name}
            </h1>
            {personalInfo.title && (
              <p className="text-lg text-white/90 mb-2">{personalInfo.title}</p>
            )}
            <div className="flex gap-4 text-white text-sm opacity-90">
              {personalInfo.email && (
                <div className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
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

      <div className="p-6">
        {/* Summary with geometric accent */}
        {personalInfo.summary && (
          <div className="mb-8 relative">
            <div
              className="absolute -left-2 top-0 w-1 h-full rounded"
              style={{ backgroundColor: theme.colors.accent }}
            />
            <div className="pl-4">
              <h2
                className="text-lg font-bold mb-3 flex items-center gap-2"
                style={{
                  fontFamily: theme.fonts.heading,
                  color: theme.colors.primary,
                }}
              >
                <FileText className="h-4 w-4" />
                Professional Summary
              </h2>
              <p className="text-sm leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            {experience.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: theme.colors.primary }}
                  >
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <h2
                    className="text-xl font-bold"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary,
                    }}
                  >
                    Experience
                  </h2>
                </div>
                <div className="space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.id} className="relative">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: theme.colors.accent }}
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{exp.role}</h3>
                          <p
                            className="font-semibold mb-1"
                            style={{ color: theme.colors.primary }}
                          >
                            {exp.company}
                          </p>
                          <p
                            className="text-sm mb-3"
                            style={{ color: theme.colors.secondary }}
                          >
                            {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                          </p>
                          <p className="text-sm leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
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

            {/* Services */}
            {services.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: theme.colors.accent }}
                  >
                    <Wrench className="w-4 h-4 text-white" />
                  </div>
                  <h2
                    className="text-xl font-bold"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary,
                    }}
                  >
                    Services
                  </h2>
                </div>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="relative">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-3 h-3 rounded-sm mt-2 flex-shrink-0"
                          style={{ backgroundColor: theme.colors.accent }}
                        />
                        <div className="flex-1">
                          <h3 className="font-bold">{service.name}</h3>
                          {service.description && (
                            <p className="text-sm leading-relaxed">
                              {service.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            {education.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: theme.colors.accent }}
                  >
                    <GraduationCap className="w-3 h-3 text-white" />
                  </div>
                  <h2
                    className="text-lg font-bold"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary,
                    }}
                  >
                    Education
                  </h2>
                </div>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className="pl-4 border-l-2"
                      style={{ borderColor: theme.colors.secondary }}
                    >
                      <h3 className="font-semibold text-sm">{edu.degree}</h3>
                      <p
                        className="text-sm font-medium"
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
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-6 h-6 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: theme.colors.secondary }}
                  >
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  <h2
                    className="text-lg font-bold"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary,
                    }}
                  >
                    Skills
                  </h2>
                </div>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold">
                          {skill.name}
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: theme.colors.secondary }}
                        >
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-300"
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
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-6 h-6 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: theme.colors.primary }}
                  >
                    <Award className="w-3 h-3 text-white" />
                  </div>
                  <h2
                    className="text-lg font-bold"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary,
                    }}
                  >
                    Certificates
                  </h2>
                </div>
                <div className="space-y-3">
                  {certificates.map((cert) => (
                    <div key={cert.id}>
                      <h3 className="font-semibold text-sm">{cert.title}</h3>
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
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: theme.colors.accent }}
                  >
                    <Languages className="w-3 h-3 text-white" />
                  </div>
                  <h2
                    className="text-lg font-bold"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.primary,
                    }}
                  >
                    Languages
                  </h2>
                </div>
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
            <p className="text-lg mb-2">Your geometric resume will appear here</p>
            <p className="text-sm">Modern design with geometric shapes and bold sections</p>
          </div>
        )}
    </div>
  )
}