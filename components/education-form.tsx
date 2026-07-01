"use client"
import type { Education } from "@/app/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Plus, Trash2, GraduationCap } from "lucide-react"

interface EducationFormProps {
  data: Education[]
  onChange: (data: Education[]) => void
}

export function EducationForm({ data, onChange }: EducationFormProps) {
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      school: "",
      degree: "",
      startYear: "",
      endYear: "",
      gpa: "",
    }
    onChange([...data, newEducation])
  }

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    onChange(data.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  const removeEducation = (id: string) => {
    onChange(data.filter((edu) => edu.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold font-serif mb-2">Education</h3>
          <p className="text-sm text-muted-foreground">Add your educational background and qualifications</p>
        </div>
        <Button onClick={addEducation} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </Button>
      </div>

      {data.length === 0 ? (
        <Card className="p-8 text-center border-dashed border-2">
          <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">No education entries yet</p>
          <Button onClick={addEducation} variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Your First Education
          </Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {data.map((education) => (
            <Card key={education.id} className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold">Education Entry</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeEducation(education.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>School/University *</Label>
                  <Input
                    placeholder="Harvard University"
                    value={education.school}
                    onChange={(e) => updateEducation(education.id, "school", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Degree *</Label>
                  <Input
                    placeholder="Bachelor of Science in Computer Science"
                    value={education.degree}
                    onChange={(e) => updateEducation(education.id, "degree", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Start Year *</Label>
                  <Input
                    placeholder="2018"
                    value={education.startYear}
                    onChange={(e) => updateEducation(education.id, "startYear", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>End Year *</Label>
                  <Input
                    placeholder="2022"
                    value={education.endYear}
                    onChange={(e) => updateEducation(education.id, "endYear", e.target.value)}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label>GPA (Optional)</Label>
                  <Input
                    placeholder="3.8/4.0"
                    value={education.gpa}
                    onChange={(e) => updateEducation(education.id, "gpa", e.target.value)}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
