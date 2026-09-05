import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background text-foreground p-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-heading mb-4">
          Digital Transformation Agency
        </h1>
        <p className="text-muted-foreground mb-6">
          We help enterprises navigate complex digital transformations with 
          strategic vision and technical excellence. From strategy to execution, 
          we partner with you to drive measurable outcomes and sustainable growth.
        </p>
        <Button href="/contact" className="mt-2">
          Contact Us
        </Button>
      </div>
      <div className="font-mono text-xs text-muted-foreground mt-auto">
        (Press <kbd>d</kbd> to toggle dark mode)
      </div>
    </div>
  )
}
