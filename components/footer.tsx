export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Citi Adolph</h3>
            <p className="text-sm">
              Digital Transformation Agency partnering with businesses to build and plan their digital strategy.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <nav className="space-y-1">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/what-we-do" className="hover:underline">
                What We Do
              </a>
              <a href="/who-we-are" className="hover:underline">
                Who We Are
              </a>
              <a href="/what-we-think" className="hover:underline">
                What We Think
              </a>
              <a href="/career" className="hover:underline">
                Career
              </a>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
              <a href="/login" className="hover:underline">
                Login
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="space-y-1">
              Phone: +1 (555) 123-4567
            </p>
            <p className="space-y-1">
              Email: hello@citiadolph.com
            </p>
            <p className="space-y-1">
              Address: 123 Delaware Ave, Wilmington, DE 19801
            </p>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                X (Twitter)
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center text-sm">
          © {new Date().getFullYear()} Citi Adolph. All rights reserved.
        </div>
      </div>
    </footer>
  );
}