"use client"

import type { Service } from "@/app/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Plus, Trash2, Wrench } from "lucide-react"

interface ServicesFormProps {
  data?: Service[] // 👈 make optional
  onChange: (data: Service[]) => void
}

export function ServicesForm({ data = [], onChange }: ServicesFormProps) {
  const addService = () => {
    const newService: Service = {
      id: Date.now().toString(),
      name: "",
      description: "",
    }
    onChange([...data, newService])
  }

  const updateService = (id: string, field: keyof Service, value: string) => {
    onChange(data.map((srv) => (srv.id === id ? { ...srv, [field]: value } : srv)))
  }

  const removeService = (id: string) => {
    onChange(data.filter((srv) => srv.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold font-serif mb-2">Services</h3>
          <p className="text-sm text-muted-foreground">Add the services you provide</p>
        </div>
        <Button onClick={addService} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </div>

      {data.length === 0 ? (
        <Card className="p-8 text-center border-dashed border-2">
          <Wrench className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">No services added yet</p>
          <Button onClick={addService} variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Your First Service
          </Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {data.map((service) => (
            <Card key={service.id} className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold">Service</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeService(service.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Service Name *</Label>
                <Input
                  placeholder="Web Development"
                  value={service.name}
                  onChange={(e) => updateService(service.id, "name", e.target.value)}
                />
              </div>

              <div className="space-y-2 mt-4">
                <Label>Description *</Label>
                <Input
                  placeholder="Full-stack web applications, responsive UI..."
                  value={service.description}
                  onChange={(e) => updateService(service.id, "description", e.target.value)}
                />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
