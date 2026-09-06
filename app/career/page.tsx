import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Career() {
  return (
    <div className="min-h-svh flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center bg-background text-foreground py-16 px-4 sm:py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-heading mb-6 tracking-tighter">
            Career
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Join our team of passionate digital transformation experts and 
            help shape the future of businesses across Africa.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 bg-background px-4 pt-12 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-12">
            {/* Why Work With Us */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading mb-4">Why Work With Us?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Citi Adolph, we foster a culture of innovation, collaboration, 
                and continuous learning. Our team works on cutting-edge projects 
                that make a real impact, and we invest in our people's growth 
                through mentorship, training, and challenging opportunities.
              </p>
            </div>

            {/* Our Values (same as who-we-are but shorter) */}
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
              </div>
            </div>

            {/* Open Positions */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading mb-4">Open Positions</h2>
              <div className="space-y-4">
                {/* Position 1 */}
                <Link href="/career/digital-consultant" className="block border border-gray-200/50 rounded-lg p-4 hover:border-gray-200/75 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium mb-1">Digital Consultant</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Remote • Full-time
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Apply now
                    </span>
                  </div>
                </Link>

                {/* Position 2 */}
                <Link href="/career/ui-ux-designer" className="mt-4 block border border-gray-200/50 rounded-lg p-4 hover:border-gray-200/75 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium mb-1">UI/UX Designer</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Lagos, Nigeria • Hybrid
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Apply now
                    </span>
                  </div>
                </Link>

                {/* Position 3 */}
                <Link href="/career/data-analyst" className="mt-4 block border border-gray-200/50 rounded-lg p-4 hover:border-gray-200/75 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium mb-1">Data Analyst</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Nairobi, Kenya • Full-time
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Apply now
                    </span>
                  </div>
                </Link>

                {/* Position 4 */}
                <Link href="/career/project-manager" className="mt-4 block border border-gray-200/50 rounded-lg p-4 hover:border-gray-200/75 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium mb-1">Project Manager</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Cairo, Egypt • Hybrid
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Apply now
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-6 text-center pt-8 border-t border-gray-200/50">
              <h2 className="text-2xl font-heading mb-4">
                Ready to embark on a rewarding career journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-lg">
                Explore our open positions and find the role that matches your 
                skills, passions, and aspirations.
              </p>
              <Button href="/career/open-positions" variant="brand" className="mx-auto">
                View All Openings
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}