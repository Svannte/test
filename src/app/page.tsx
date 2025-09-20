import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-[#0a2540] text-foreground">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Company logo"
            width={120}
            height={25}
            priority
          />
        </div>
        <div className="flex items-center gap-6">
          <Link 
            href="/contact" 
            className="text-foreground/80 hover:text-foreground transition-colors font-medium"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 sm:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Welcome to Our Platform
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Build modern, scalable applications with our cutting-edge technology stack. 
            Experience the power of Next.js, React, and Tailwind CSS working together seamlessly.
          </p>
          
          <div className="flex gap-4 items-center justify-center flex-col sm:flex-row mb-16">
            <Link
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-sm sm:text-base h-12 px-8 flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              href="/contact"
            >
              Get Started
            </Link>
            <Link
              className="rounded-full border border-white/20 text-foreground font-medium text-sm sm:text-base h-12 px-8 flex items-center justify-center hover:bg-white/10 transition-colors"
              href="#features"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="max-w-6xl mx-auto mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Why Choose Our Platform?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-background/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-background/10 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p className="text-foreground/70 leading-relaxed">
                Built with Next.js and optimized for performance. Experience blazing fast load times and smooth interactions.
              </p>
            </div>

            <div className="text-center p-8 bg-background/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-background/10 transition-colors">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliable</h3>
              <p className="text-foreground/70 leading-relaxed">
                Enterprise-grade reliability with 99.9% uptime. Your applications will always be available when you need them.
              </p>
            </div>

            <div className="text-center p-8 bg-background/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-background/10 transition-colors">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Scalable</h3>
              <p className="text-foreground/70 leading-relaxed">
                Scale from prototype to production seamlessly. Our architecture grows with your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-4xl mx-auto mt-20 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">10K+</div>
              <div className="text-foreground/70">Active Users</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-foreground/70">Uptime</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-foreground/70">Support</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Company logo"
                width={100}
                height={20}
              />
              <span className="text-foreground/60 text-sm">© 2025 All rights reserved</span>
            </div>
            
            <div className="flex gap-6">
              <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-foreground/60 hover:text-foreground transition-colors"
                href="/contact"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="Contact icon"
                  width={16}
                  height={16}
                />
                Contact
              </Link>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-foreground/60 hover:text-foreground transition-colors"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Docs icon"
                  width={16}
                  height={16}
                />
                Documentation
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-foreground/60 hover:text-foreground transition-colors"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="GitHub icon"
                  width={16}
                  height={16}
                />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
