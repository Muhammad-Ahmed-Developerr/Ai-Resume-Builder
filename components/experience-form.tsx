"use client"
import type { Experience } from "@/app/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { Plus, Trash2, Briefcase } from "lucide-react"

interface ExperienceFormProps {
  data: Experience[]
  onChange: (data: Experience[]) => void
}

export function ExperienceForm({ data, onChange }: ExperienceFormProps) {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
      current: false,
    }
    onChange([...data, newExperience])
  }

  const updateExperience = (id: string, field: keyof Experience, value: string | boolean) => {
    onChange(data.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  const removeExperience = (id: string) => {
    onChange(data.filter((exp) => exp.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold font-serif mb-2">Work Experience</h3>
          <p className="text-sm text-muted-foreground">Add your professional work experience and achievements</p>
        </div>
        <Button onClick={addExperience} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </Button>
      </div>

      {data.length === 0 ? (
        <Card className="p-8 text-center border-dashed border-2">
          <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">No work experience entries yet</p>
          <Button onClick={addExperience} variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Your First Experience
          </Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {data.map((experience) => (
            <Card key={experience.id} className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold">Experience Entry</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeExperience(experience.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Company *</Label>
                  <Input
                    placeholder="Google Inc."
                    value={experience.company}
                    onChange={(e) => updateExperience(experience.id, "company", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Job Title *</Label>
                  <Input
                    placeholder="Senior Software Engineer"
                    value={experience.role}
                    onChange={(e) => updateExperience(experience.id, "role", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Start Date *</Label>
                  <Input
                    type="month"
                    value={experience.startDate}
                    onChange={(e) => updateExperience(experience.id, "startDate", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    type="month"
                    value={experience.endDate}
                    disabled={experience.current}
                    onChange={(e) => updateExperience(experience.id, "endDate", e.target.value)}
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`current-${experience.id}`}
                      checked={experience.current}
                      onCheckedChange={(checked) => updateExperience(experience.id, "current", checked as boolean)}
                    />
                    <Label htmlFor={`current-${experience.id}`} className="text-sm">
                      I currently work here
                    </Label>
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label>Job Description *</Label>
                  <Textarea
                    placeholder="• Led a team of 5 developers to build scalable web applications&#10;• Improved system performance by 40% through optimization&#10;• Collaborated with cross-functional teams to deliver features"
                    rows={4}
                    value={experience.description}
                    onChange={(e) => updateExperience(experience.id, "description", e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Use bullet points to highlight your key achievements and responsibilities
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
