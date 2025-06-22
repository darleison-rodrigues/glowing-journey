// src/app/page.tsx
'use client'; // <--- This line is already there and correctly makes it a Client Component

import Image from 'next/image';
import Link from 'next/link';
// Corrected: FaScaleBalanced -> FaBalanceScale
import { FaBolt, FaBrain, FaBalanceScale, FaRocket, FaCheckCircle, FaChartLine, FaPuzzlePiece } from 'react-icons/fa'; // More icons for variety

export default function HomePage() {
  return (
    <div className="min-h-screen bg-light-slate-blue text-dark-charcoal">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        {/* Subtle background abstract shapes/glows for visual interest */}
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-electric-blue rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amethyst-purple rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/4 left-1/2 w-60 h-60 bg-light-gray-border rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-dark-charcoal mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-amethyst-purple inline-block">
              AI-Powered Search & Discovery
            </span> <br /> for E-commerce Excellence
          </h1>
          <p className="text-xl md:text-2xl text-medium-gray max-w-3xl mx-auto mb-10 leading-relaxed">
            Empower your customers to find exactly what they need, instantly. Commerce Query by Embed IQ Inc. delivers intelligent, scalable, and lightning-fast search experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/solutions"
              className="bg-electric-blue text-pure-white px-8 py-4 rounded-full font-bold text-lg shadow-lg-smooth hover:bg-amethyst-purple transition-all duration-300 transform hover:scale-105"
            >
              Explore Solutions
            </Link>
            <Link
              href="/contact"
              className="bg-pure-white text-electric-blue px-8 py-4 rounded-full font-bold text-lg border-2 border-electric-blue shadow-smooth hover:border-amethyst-purple hover:text-amethyst-purple transition-all duration-300 transform hover:scale-105"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-pure-white shadow-inner-lg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-dark-charcoal text-center mb-12">
            The Challenge: Unlocking Product Discoverability
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-medium-gray text-lg leading-relaxed">
              <p className="mb-4">
                In today's competitive e-commerce landscape, customers demand instant gratification. Slow, irrelevant, or cumbersome search experiences lead to high bounce rates and lost sales. Traditional search solutions often struggle with massive datasets, complex queries, and delivering truly personalized results.
              </p>
              <p>
                This gap between customer expectation and system capability costs businesses millions in missed opportunities.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/commercequery.jpg" // Using the Commerce Query logo here
                alt="Commerce Query in action"
                width={300}
                height={300}
                className="rounded-3xl shadow-lg-smooth"
              />
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-dark-charcoal mb-6">
              Our Solution: Commerce Query by Embed IQ Inc.
            </h3>
            <p className="text-xl text-electric-blue font-semibold">
              Revolutionizing how your customers discover and engage with your products.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits / Features Section */}
      <section className="py-20 bg-light-slate-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-dark-charcoal text-center mb-16">
            Why Commerce Query Stands Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Benefit Card 1 */}
            <div className="bg-pure-white p-8 rounded-2xl shadow-smooth text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg-smooth">
              <FaBolt className="text-electric-blue text-5xl mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-dark-charcoal mb-3">Blazing Fast Performance</h3>
              <p className="text-medium-gray">
                Deliver sub-millisecond search results, even across colossal catalogs, ensuring your customers never wait.
              </p>
            </div>
            {/* Benefit Card 2 */}
            <div className="bg-pure-white p-8 rounded-2xl shadow-smooth text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg-smooth">
              <FaBrain className="text-amethyst-purple text-5xl mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-dark-charcoal mb-3">AI-Powered Relevance</h3>
              <p className="text-medium-gray">
                Leverage advanced AI to understand user intent, provide intelligent suggestions, and personalize results.
              </p>
            </div>
            {/* Benefit Card 3 - CORRECTED ICON */}
            <div className="bg-pure-white p-8 rounded-2xl shadow-smooth text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg-smooth">
              <FaBalanceScale className="text-electric-blue text-5xl mb-6 mx-auto" /> {/* Corrected here */}
              <h3 className="text-2xl font-bold text-dark-charcoal mb-3">Infinite Scalability</h3>
              <p className="text-medium-gray">
                Engineered to grow with your business, effortlessly handling peak traffic and expanding data volumes.
              </p>
            </div>
            {/* Benefit Card 4 */}
            <div className="bg-pure-white p-8 rounded-2xl shadow-smooth text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg-smooth">
              <FaPuzzlePiece className="text-amethyst-purple text-5xl mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-dark-charcoal mb-3">Seamless Integration</h3>
              <p className="text-medium-gray">
                Easy-to-use APIs and comprehensive documentation mean rapid integration into any platform.
              </p>
            </div>
            {/* Benefit Card 5 */}
            <div className="bg-pure-white p-8 rounded-2xl shadow-smooth text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg-smooth">
              <FaChartLine className="text-electric-blue text-5xl mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-dark-charcoal mb-3">Actionable Insights</h3>
              <p className="text-medium-gray">
                Gain deep understanding of search trends and user behavior to optimize your product strategy.
              </p>
            </div>
            {/* Benefit Card 6 */}
            <div className="bg-pure-white p-8 rounded-2xl shadow-smooth text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg-smooth">
              <FaCheckCircle className="text-amethyst-purple text-5xl mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-dark-charcoal mb-3">Unmatched Reliability</h3>
              <p className="text-medium-gray">
                Built on a robust infrastructure, ensuring your search capabilities are always online and performing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Testimonial Section (Placeholder) */}
      <section className="py-20 bg-pure-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-dark-charcoal mb-10">
            Trusted by Industry Leaders
          </h2>
          <blockquote className="text-2xl italic text-medium-gray leading-relaxed mb-8">
            "Commerce Query transformed our customer's product discovery. The speed and relevance are unmatched, directly impacting our conversion rates."
          </blockquote>
          <p className="font-semibold text-dark-charcoal">- Leading E-commerce Platform CTO</p>
          {/* Placeholder for client logos, if available */}
          {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            <Image src="/client-logo-1.svg" alt="Client 1" width={120} height={60} />
            <Image src="/client-logo-2.svg" alt="Client 2" width={120} height={60} />
            <Image src="/client-logo-3.svg" alt="Client 3" width={120} height={60} />
            <Image src="/client-logo-4.svg" alt="Client 4" width={120} height={60} />
          </div> */}
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-electric-blue to-amethyst-purple text-pure-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Ready to Revolutionize Your Search?
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            Experience the power of intelligent product discovery with Commerce Query.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-pure-white text-electric-blue px-10 py-5 rounded-full font-bold text-xl shadow-lg-smooth hover:bg-light-slate-blue transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}