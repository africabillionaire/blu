import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="w-full max-w-4xl space-y-8 text-center">
        {/* Logo / Brand */}
        <div className="space-y-4">
          <Link href="/" className="text-4xl font-bold">
            Citi Adolph
          </Link>
          <p className="text-lg text-muted-foreground">
            Digital Transformation Agency
          </p>
        </div>

        {/* Hero Message */}
        <div className="space-y-6">
          <h1 className="text-3xl font-heading mb-4">
            We partner with businesses to build and plan their digital strategy.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            From strategy to execution, we provide end-to-end digital transformation 
            services that drive measurable outcomes and sustainable growth.
          </p>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <Button href="/contact" variant="brand" className="mx-auto px-8 py-3">
            Get Started
          </Button>
        </div>

        {/* Brief Highlights */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
          <div>
            <h3 className="text-lg font-medium mb-2">Strategy</h3>
            <p className="text-sm text-muted-foreground">
              Digital roadmaps, technology assessments, and innovation planning.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Development</h3>
            <p className="text-sm text-muted-foreground">
              Web, mobile, ERP, and AI solutions tailored to your needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Design</h3>
            <p className="text-sm text-muted-foreground">
              UX/UI, branding, and creative services that elevate your brand.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">People</h3>
            <p className="text-sm text-muted-foreground">
              HR consultancy, talent acquisition, and change management.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}