import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Next.js App',
  description: 'Get in touch with us. Send us a message and we\'ll respond as soon as possible.',
};

export default function Contact() {

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#0a2540]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-2xl w-full">
        <div className="flex items-center gap-4 mb-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={25}
            priority
          />
          <span className="text-2xl font-semibold text-foreground">Contact</span>
        </div>

        <ContactForm />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-8">
          <div className="text-center p-6 bg-background/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-foreground/80">hello@company.com</p>
          </div>

          <div className="text-center p-6 bg-background/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-sm text-foreground/80">+1 (555) 123-4567</p>
          </div>

          <div className="text-center p-6 bg-background/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Office</h3>
            <p className="text-sm text-foreground/80">123 Business St<br />City, State 12345</p>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-foreground/80 hover:text-foreground transition-colors"
          href="/"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="Home icon"
            width={16}
            height={16}
          />
          Back to Home
        </Link>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-foreground/80 hover:text-foreground transition-colors"
          href="mailto:hello@company.com"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Email icon"
            width={16}
            height={16}
          />
          Direct Email
        </a>
      </footer>
    </div>
  );
}