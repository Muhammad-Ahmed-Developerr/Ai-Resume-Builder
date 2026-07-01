"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Plus, Trash2, Languages } from "lucide-react"

export interface Language {
  id: string
  name: string
  proficiency: string
}

interface LanguagesFormProps {
  data?: Language[] // 👈 optional
  onChange: (data: Language[]) => void
}

export function LanguagesForm({ data = [], onChange }: LanguagesFormProps) {
  const addLanguage = () => {
    const newLang: Language = {
      id: Date.now().toString(),
      name: "",
      proficiency: "",
    }
    onChange([...data, newLang])
  }

  const updateLanguage = (id: string, field: keyof Language, value: string) => {
    onChange(data.map((lang) => (lang.id === id ? { ...lang, [field]: value } : lang)))
  }

  const removeLanguage = (id: string) => {
    onChange(data.filter((lang) => lang.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold font-serif mb-2">Languages</h3>
          <p className="text-sm text-muted-foreground">Add the languages you know</p>
        </div>
        <Button onClick={addLanguage} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Language
        </Button>
      </div>

      {data.length === 0 ? (
        <Card className="p-8 text-center border-dashed border-2">
          <Languages className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">No languages added yet</p>
          <Button onClick={addLanguage} variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Your First Language
          </Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {data.map((lang) => (
            <Card key={lang.id} className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold">Language</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeLanguage(lang.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Language Name *</Label>
                <Input
                  placeholder="English, Urdu, Arabic..."
                  value={lang.name}
                  onChange={(e) => updateLanguage(lang.id, "name", e.target.value)}
                />
              </div>

              <div className="space-y-2 mt-4">
                <Label>Proficiency *</Label>
                <Input
                  placeholder="Beginner, Intermediate, Fluent, Native..."
                  value={lang.proficiency}
                  onChange={(e) => updateLanguage(lang.id, "proficiency", e.target.value)}
                />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
