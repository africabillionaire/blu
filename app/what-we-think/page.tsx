import Link from "next/link";

export default function WhatWeThink() {
  return (
    <div className="min-h-svh flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center bg-background text-foreground py-16 px-4 sm:py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-heading mb-6 tracking-tighter">
            What We Think
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Insights, perspectives, and thought leadership on digital 
            transformation, technology trends, and business innovation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 bg-background px-4 pt-12 pb-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-heading mb-8">Featured Insights</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Article 1 */}
            <Link href="/what-we-think/digital-transformation-africa" className="group block border border-gray-200/50 rounded-lg overflow-hidden hover:border-gray-200/75 transition-colors">
              <div className="p-6">
                <h3 className="text-xl font-heading mb-2 line-clamp-2">
                  Digital Transformation in Africa: Opportunities and Challenges
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  Explore how businesses across the continent can leverage 
                  technology to drive sustainable growth and competitive 
                  advantage in a rapidly evolving landscape.
                </p>
                <span className="text-xs text-muted-foreground">
                  Read more →
                </span>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/what-we-think/ai-strategy-startups" className="group block border border-gray-200/50 rounded-lg overflow-hidden hover:border-gray-200/75 transition-colors">
              <div className="p-6">
                <h3 className="text-xl font-heading mb-2 line-clamp-2">
                  Building an AI Strategy for Startups: Practical Steps
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  Learn how early-stage companies can identify AI opportunities, 
                  build the right talent, and implement ethical AI solutions 
                  that scale with their business.
                </p>
                <span className="text-xs text-muted-foreground">
                  Read more →
                </span>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/what-we-think/cybersecurity-smes" className="group block border border-gray-200/50 rounded-lg overflow-hidden hover:border-gray-200/75 transition-colors">
              <div className="p-6">
                <h3 className="text-xl font-heading mb-2 line-clamp-2">
                  Cybersecurity Essentials for Small and Medium Enterprises
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  Protecting your business doesn't require enterprise-level 
                  budgets. Discover practical, affordable measures to safeguard 
                  your digital assets and maintain customer trust.
                </p>
                <span className="text-xs text-muted-foreground">
                  Read more →
                </span>
              </div>
            </Link>

            {/* Article 4 */}
            <Link href="/what-we-think/remote-work-future" className="group block border border-gray-200/50 rounded-lg overflow-hidden hover:border-gray-200/75 transition-colors">
              <div className="p-6">
                <h3 className="text-xl font-heading mb-2 line-clamp-2">
                  The Future of Remote Work: Hybrid Models and Digital Collaboration
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  As work continues to evolve, we examine how organizations 
                  can design effective remote and hybrid policies that 
                  enhance productivity, employee satisfaction, and 
                  organizational resilience.
                </p>
                <span className="text-xs text-muted-foreground">
                  Read more →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}