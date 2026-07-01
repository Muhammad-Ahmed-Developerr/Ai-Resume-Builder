"use client"

import { useState } from "react"
import type { Project } from "@/app/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, FolderOpen, X } from "lucide-react"

interface ProjectsFormProps {
  data: Project[]
  onChange: (data: Project[]) => void
}

export function ProjectsForm({ data, onChange }: ProjectsFormProps) {
  const [newTech, setNewTech] = useState<{ [key: string]: string }>({})

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: "",
      description: "",
      technologies: [],
      link: "",
    }
    onChange([...data, newProject])
  }

  const updateProject = (id: string, field: keyof Project, value: string | string[]) => {
    onChange(data.map((project) => (project.id === id ? { ...project, [field]: value } : project)))
  }

  const removeProject = (id: string) => {
    onChange(data.filter((project) => project.id !== id))
  }

  const addTechnology = (projectId: string) => {
    const tech = newTech[projectId]?.trim()
    if (!tech) return

    const project = data.find((p) => p.id === projectId)
    if (project && !project.technologies.includes(tech)) {
      updateProject(projectId, "technologies", [...project.technologies, tech])
    }
    setNewTech((prev) => ({ ...prev, [projectId]: "" }))
  }

  const removeTechnology = (projectId: string, tech: string) => {
    const project = data.find((p) => p.id === projectId)
    if (project) {
      updateProject(
        projectId,
        "technologies",
        project.technologies.filter((t) => t !== tech),
      )
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold font-serif mb-2">Projects & Portfolio</h3>
          <p className="text-sm text-muted-foreground">Showcase your best projects and achievements</p>
        </div>
        <Button onClick={addProject} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      </div>

      {data.length === 0 ? (
        <Card className="p-8 text-center border-dashed border-2">
          <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">No projects added yet</p>
          <Button onClick={addProject} variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Your First Project
          </Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {data.map((project) => (
            <Card key={project.id} className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold">Project Entry</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeProject(project.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Project Name *</Label>
                    <Input
                      placeholder="E-commerce Website"
                      value={project.name}
                      onChange={(e) => updateProject(project.id, "name", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Project Link (Optional)</Label>
                    <Input
                      placeholder="https://github.com/username/project"
                      value={project.link}
                      onChange={(e) => updateProject(project.id, "link", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Project Description *</Label>
                  <Textarea
                    placeholder="Built a full-stack e-commerce platform with user authentication, payment processing, and admin dashboard. Implemented responsive design and optimized for performance..."
                    rows={3}
                    value={project.description}
                    onChange={(e) => updateProject(project.id, "description", e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Technologies Used</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add technology (e.g., React, Node.js)"
                      value={newTech[project.id] || ""}
                      onChange={(e) => setNewTech((prev) => ({ ...prev, [project.id]: e.target.value }))}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addTechnology(project.id)
                        }
                      }}
                    />
                    <Button type="button" size="sm" onClick={() => addTechnology(project.id)}>
                      Add
                    </Button>
                  </div>

                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                          {tech}
                          <button
                            onClick={() => removeTechnology(project.id, tech)}
                            className="ml-1 hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
