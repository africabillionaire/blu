"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ToastProvider, toast, Toaster } from "@/components/ui/toast"
import { useState } from "react"

export const config = {
  runtime: "experimental-edge",
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      // In a real app, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate success
      toast.success("Your message has been sent successfully! We'll get back to you within 24 hours.")
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      })
    } catch (err) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-svh flex flex-col">
      <ToastProvider>
        {/* Hero Section */}
        <section className="flex-1 flex flex-col items-center justify-center bg-background text-foreground py-16 px-4 sm:py-20">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-heading mb-6 tracking-tighter">
              Let's Build Your Digital Future Together
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              We specialize in guiding enterprises through complex digital transformations. 
              Share your vision, and we'll show you how to make it a reality.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="flex-1 bg-background px-4 pt-12 pb-20">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading mb-4">Get in Touch</h2>
              <p className="text-muted-foreground">
                Whether you have a question about our services, need a consultation, 
                or are ready to start your transformation journey, we're here to help.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Alex Johnson"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="alex@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company">Company / Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Innovatech Solutions"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service">How Can We Help?</Label>
                  <Select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  >
                    <option value="">Select a service</option>
                    <option value="strategy">Digital Strategy & Roadmapping</option>
                    <option value="implementation">Technology Implementation</option>
                    <option value="optimization">Process Optimization & Automation</option>
                    <option value="training">Change Management & Training</option>
                    <option value="support">Ongoing Support & Optimization</option>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    disabled={isSubmitting}
                    placeholder="Tell us about your challenges, goals, and timeline..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-3"
                >
                  {isSubmitting ? (
                    <>
                      <span className="me-2 h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info / Illustration */}
            <div className="hidden lg:flex flex-col items-center space-y-8">
              {/* We'll add some visual elements here */}
              <div className="text-center">
                <h3 className="text-2xl font-heading mb-4">Our Transformation Approach</h3>
                <p className="text-muted-foreground max-w-lg">
                  We combine strategic vision with technical excellence to deliver measurable outcomes. 
                  Our proven methodology ensures your digital transformation drives real business value.
                </p>
              </div>
              
              {/* Simple visual representation using Tailwind */}
              <div className="w-full max-w-md space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Strategy First</h4>
                    <p className="text-sm text-muted-foreground">
                      We begin with a comprehensive assessment of your current state and future goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Tailored Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      Every solution is customized to your unique business needs and technology landscape.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Measurable Results</h4>
                    <p className="text-sm text-muted-foreground">
                      We focus on outcomes that matter: efficiency gains, revenue growth, and competitive advantage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ToastProvider>
      <Toaster />
    </div>
  )
}