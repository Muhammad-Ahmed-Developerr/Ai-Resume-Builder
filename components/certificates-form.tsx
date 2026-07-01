"use client"

import type { Certificate } from "@/app/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2, Award, Upload } from "lucide-react"

interface CertificatesFormProps {
  data?: Certificate[]
  onChange: (data: Certificate[]) => void
}

export function CertificatesForm({ data = [], onChange }: CertificatesFormProps) {
  const addCertificate = () => {
    const newCert: Certificate = {
      id: Date.now().toString(),
      title: "",
      issuer: "",
      year: "",
      description: "",
      image: "", // 👈 storing uploaded file URL/base64 here
    }
    onChange([...data, newCert])
  }

  const updateCertificate = (id: string, field: keyof Certificate, value: string) => {
    onChange(data.map((cert) => (cert.id === id ? { ...cert, [field]: value } : cert)))
  }

  const removeCertificate = (id: string) => {
    onChange(data.filter((cert) => cert.id !== id))
  }

  const handleImageUpload = (id: string, file: File | null) => {
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => {
      updateCertificate(id, "image", reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold font-serif mb-2">Certificates</h3>
          <p className="text-sm text-muted-foreground">Add your professional certificates</p>
        </div>
        <Button onClick={addCertificate} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Certificate
        </Button>
      </div>

      {data.length === 0 ? (
        <Card className="p-8 text-center border-dashed border-2">
          <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">No certificates yet</p>
          <Button onClick={addCertificate} variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Your First Certificate
          </Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {data.map((certificate) => (
            <Card key={certificate.id} className="p-4">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold">Certificate</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeCertificate(certificate.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Title *</Label>
                  <Input
                    placeholder="Certified Web Developer"
                    value={certificate.title}
                    onChange={(e) => updateCertificate(certificate.id, "title", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Issuer *</Label>
                  <Input
                    placeholder="Google / Microsoft"
                    value={certificate.issuer}
                    onChange={(e) => updateCertificate(certificate.id, "issuer", e.target.value)}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label>Year *</Label>
                  <Input
                    placeholder="2023"
                    value={certificate.year}
                    onChange={(e) => updateCertificate(certificate.id, "year", e.target.value)}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label>Description</Label>
                  <Textarea
                    placeholder="Brief description about this certificate..."
                    value={certificate.description || ""}
                    onChange={(e) => updateCertificate(certificate.id, "description", e.target.value)}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label>Certificate Image</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(certificate.id, e.target.files?.[0] || null)}
                    />
                    {certificate.image && (
                      <img
                        src={certificate.image}
                        alt="Certificate"
                        className="w-20 h-20 rounded border object-cover"
                      />
                    )}
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
