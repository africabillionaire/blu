"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: null as string | null,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      alert("Message sent successfully!")
      setFormData({ name: "", email: "", company: "", service: null, message: "" })
    } catch (err) {
      alert("Failed to send message.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-svh flex flex-col items-center justify-center bg-background text-foreground p-6">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-heading mb-4">Contact Citi Adolph</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required className="w-full" disabled={isSubmitting} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required className="w-full" disabled={isSubmitting} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} className="w-full" disabled={isSubmitting} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service">Service</Label>
            <div className="w-full">
              <Select
                id="service"
                value={formData.service}
                onValueChange={val => setFormData({ ...formData, service: val })}
                disabled={isSubmitting}
              >
                <SelectTrigger className="w-full">
                  <SelectValue className="w-full">
                    {formData.service ?? "Select a service"}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectItem value="strategy">Digital Strategy</SelectItem>
                  <SelectItem value="implementation">Implementation</SelectItem>
                  <SelectItem value="optimization">Optimization</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={4} required className="w-full" disabled={isSubmitting} />
          </div>
          <Button type="submit" variant="brand" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  )
}