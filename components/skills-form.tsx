"use client"
import type { Skill } from "@/app/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Plus, Trash2, Zap } from "lucide-react"

interface SkillsFormProps {
  data: Skill[]
  onChange: (data: Skill[]) => void
}

export function SkillsForm({ data, onChange }: SkillsFormProps) {
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: "",
      proficiency: 50,
    }
    onChange([...data, newSkill])
  }

  const updateSkill = (id: string, field: keyof Skill, value: string | number) => {
    onChange(data.map((skill) => (skill.id === id ? { ...skill, [field]: value } : skill)))
  }

  const removeSkill = (id: string) => {
    onChange(data.filter((skill) => skill.id !== id))
  }

  const getProficiencyLabel = (value: number) => {
    if (value <= 25) return "Beginner"
    if (value <= 50) return "Intermediate"
    if (value <= 75) return "Advanced"
    return "Expert"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold font-serif mb-2">Skills & Expertise</h3>
          <p className="text-sm text-muted-foreground">
            Add your technical and professional skills with proficiency levels
          </p>
        </div>
        <Button onClick={addSkill} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Skill
        </Button>
      </div>

      {data.length === 0 ? (
        <Card className="p-8 text-center border-dashed border-2">
          <Zap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">No skills added yet</p>
          <Button onClick={addSkill} variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Your First Skill
          </Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {data.map((skill) => (
            <Card key={skill.id} className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold">Skill Entry</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeSkill(skill.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Skill Name *</Label>
                  <Input
                    placeholder="JavaScript, Project Management, Adobe Photoshop..."
                    value={skill.name}
                    onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label>Proficiency Level</Label>
                    <span className="text-sm font-medium text-primary">{getProficiencyLabel(skill.proficiency)}</span>
                  </div>
                  <Slider
                    value={[skill.proficiency]}
                    onValueChange={(value) => updateSkill(skill.id, "proficiency", value[0])}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Advanced</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
