import Link from "next/link";

export default function WhoWeAre() {
  return (
    <div className="min-h-svh flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center bg-background text-foreground py-16 px-4 sm:py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-heading mb-6 tracking-tighter">
            Who We Are
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            We are a digital transformation agency dedicated to helping businesses 
            build and execute their digital strategies. Our team of experts 
            combines strategic vision with technical excellence to drive 
            measurable outcomes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 bg-background px-4 pt-12 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            {/* Our Mission */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower organizations across Africa to thrive in the digital age 
                by providing innovative, tailored digital transformation solutions 
                that drive growth, efficiency, and competitive advantage.
              </p>
            </div>

            {/* Our Values */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading mb-4">Our Values</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="border border-gray-200/50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    We constantly seek new ways to solve complex challenges 
                    and deliver cutting-edge solutions.
                  </p>
                </div>
                <div className="border border-gray-200/50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Integrity</h3>
                  <p className="text-sm text-muted-foreground">
                    We operate with transparency, honesty, and ethical standards 
                    in all our engagements.
                  </p>
                </div>
                <div className="border border-gray-200/50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    We believe in partnership—working closely with clients, 
                    specialists, and agencies to achieve shared goals.
                  </p>
                </div>
                <div className="border border-gray-200/50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    We strive for the highest quality in every deliverable, 
                    ensuring measurable impact and lasting value.
                  </p>
                </div>
                <div className="border border-gray-200/50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Our success is measured by the tangible outcomes we create 
                    for our clients and the communities they serve.
                  </p>
                </div>
                <div className="border border-gray-200/50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Agility</h3>
                  <p className="text-sm text-muted-foreground">
                    We adapt quickly to changing market conditions and 
                    evolving client needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Story */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in Delaware and operating exclusively across Africa, 
                Citi Adolph began with a simple vision: to bridge the digital 
                divide for businesses seeking to modernize and grow. 
                Over the years, we have partnered with government agencies, 
                startups, established enterprises, and individuals who share 
                our commitment to making Africa a better place through 
                technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Today, we continue to expand our network of specialist agencies 
                and independent contractors, delivering services ranging from 
                personal branding and website development to AI implementation 
                and HR consultancy—all backed by our ISO 27001 readiness, SOC 2 
                compliance, and adherence to GDPR and European privacy standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}