import Link from "next/link";

export default function WhatWeDo() {
  return (
    <div className="min-h-svh flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center bg-background text-foreground py-16 px-4 sm:py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-heading mb-6 tracking-tighter">
            What We Do
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Explore our comprehensive range of digital transformation services 
            designed to help businesses thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 bg-background px-4 pt-12 pb-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-heading mb-8">Our Service Categories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Digital Strategy */}
            <Link href="/what-we-do/digital-strategy" className="group block border border-gray-200/50 rounded-lg overflow-hidden hover:border-gray-200/75 transition-colors flex h-full flex-col">
              <div className="p-6 flex-1">
                <h3 className="text-xl font-heading mb-2">Digital Strategy</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                  Digital consultancy, business registration services, AI implementation 
                  strategies, and technology roadmapping to guide your transformation journey.
                </p>
                <span className="mt-4 text-xs text-muted-foreground">
                  Learn more →
                </span>
              </div>
            </Link>

            {/* Development */}
            <Link href="/what-we-do/development" className="group block border border-gray-200/50 rounded-lg overflow-hidden hover:border-gray-200/75 transition-colors flex h-full flex-col">
              <div className="p-6 flex-1">
                <h3 className="text-xl font-heading mb-2">Development</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                  Website development, mobile application development, ERP implementation, 
                  and custom software solutions tailored to your business needs.
                </p>
                <span className="mt-4 text-xs text-muted-foreground">
                  Learn more →
                </span>
              </div>
            </Link>

            {/* Design & Marketing */}
            <Link href="/what-we-do/design-marketing" className="group block border border-gray-200/50 rounded-lg overflow-hidden hover:border-gray-200/75 transition-colors flex h-full flex-col">
              <div className="p-6 flex-1">
                <h3 className="text-xl font-heading mb-2">Design & Marketing</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                  Personal branding, design services, digital marketing, and social media 
                  marketing to elevate your brand and reach your audience.
                </p>
                <span className="mt-4 text-xs text-muted-foreground">
                  Learn more →
                </span>
              </div>
            </Link>

            {/* People & Finance */}
            <Link href="/what-we-do/people-finance" className="group block border border-gray-200/50 rounded-lg overflow-hidden hover:border-gray-200/75 transition-colors flex h-full flex-col">
              <div className="p-6 flex-1">
                <h3 className="text-xl font-heading mb-2">People & Finance</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                  HR consultancy services, accounting & auditing, talent acquisition, 
                  and change management to support your organization's people and financial health.
                </p>
                <span className="mt-4 text-xs text-muted-foreground">
                  Learn more →
                </span>
              </div>
            </Link>
          </div>

          {/* Detailed Service List */}
          <div className="mt-16">
            <h2 className="text-3xl font-heading mb-6">All Services</h2>
            <div className="space-y-4">
              {/* We'll list all services from context */}
              <div className="border border-gray-200/50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">1. Personal Branding for our Clients</h3>
              </div>
              <div className="border border-gray-200/50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">2. Website Development</h3>
              </div>
              <div className="border border-gray-200/50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">3. Mobile Application Development</h3>
              </div>
              <div className="border border-gray-200/50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">4. ERP Implementation</h3>
              </div>
              <div className="border border-gray-200/50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">5. Digital Consultancy</h3>
              </div>
              <div className="border border-gray-200/50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">6. Business Registration Services</h3>
              </div>
              <div className="border border-gray-200/50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">7. Design Services</h3>
              </div>
              <div className="border border-gray-200/50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">8. Digital Marketing Services</h3>
              </div>
              <div className="border border-gray-200/50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">9. Social Media Marketing</h3>
              </div>
              <div className="border border-gray-200/50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">10. HR Consultancy Services</h3>
              </div>
              <div className="border border-gray-200/50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">11. AI Implementation Strategies</h3>
              </div>
              <div className="border border-gray-200/50 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">12. Accounting & Auditing Services</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}