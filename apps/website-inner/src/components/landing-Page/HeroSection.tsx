import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="HeroSection" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               
        <div className="flex flex-col gap-20 lg:flex-row items-center min-h-screen py-20">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-6">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
              Stop Losing Sales to Complex Documentation
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Customers Can't Find{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Simple Answers
              </span>{' '}
              In Your Docs
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Every day your prospects struggle with complex documentation, your sales cycle gets longer. 
              Turn your technical docs into an AI assistant that gives instant, perfect answers.
            </p>

            {/* Business Impact Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Cut integration time by 70%
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Reduce support tickets by 80%
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Close deals 3x faster
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                Start Free Trial
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
              
              <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-200">
                <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h10a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2z"></path>
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            {/* <div className="mt-12 text-center lg:text-left">
              <p className="text-sm text-gray-500 mb-4">Trusted by companies worldwide</p>
              <div className="flex justify-center lg:justify-start items-center space-x-8 opacity-60">
                <div className="h-8 w-20 bg-gray-200 rounded"> company logo here</div> 
                <div className="h-8 w-20 bg-gray-200 rounded"></div>
                <div className="h-8 w-20 bg-gray-200 rounded"></div>
                <div className="h-8 w-20 bg-gray-200 rounded"></div>
              </div>
            </div> */}
          </div>

          {/* Right side - Before/After Transformation */}
          <div className="flex-1 mt-16 lg:mt-0">
            <div className="relative">
              {/* Before - Current State */}
              {/* <div className="mb-8">
                <div className="text-center mb-3">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">Current State</span>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 border-2 border-red-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Customer Experience</span>
                    <span className="text-red-600 text-sm">😤 Frustrated</span>
                  </div>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                      "Where do I start with this API?"
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                      "I can't find the integration guide"
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                      "Let me contact support... again"
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-red-600 font-semibold text-sm">3-6 months to integrate</span>
                  </div>
                </div>
              </div> */}

              {/* Arrow */}
              <div className="text-center mb-8">
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold inline-flex items-center">
                  TRANSFORM TO THIS
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </div>

              {/* After - AI Assistant */}
              <div>
                {/* <div className="text-center mb-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">With Our Solution</span>
                </div> */}
                <div className="flex-1 mt-16 lg:mt-0">
            <div className="relative">
              {/* Main illustration container */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Mock chat interface */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-600 font-mono">AI TechDoc Assistant</div>
                </div>

                {/* Chat messages */}
                <div className="space-y-3">
                  <div className="bg-blue-100 rounded-lg p-3 ml-8">
                    <p className="text-sm text-gray-800">"How do I implement OAuth authentication?"</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 mr-8">
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></div>
                      <span className="text-xs font-semibold text-gray-700">AI Assistant</span>
                    </div>
                    <p className="text-xs text-gray-600">Based on documentation, here's how to implement OAuth...</p>
                    <div className="mt-2 space-y-1">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-3 ml-8">
                    <p className="text-sm text-gray-800">"What about rate limiting?"</p>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex items-center mt-3 text-gray-500">
                  <div className="flex space-x-1 mr-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                  <span className="text-xs">AI is typing...</span>
                </div>
              </div>

              {/* Floating elements */}
              {/* <div className="absolute -top-4 -right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold animate-bounce">
                Accurate
              </div> */}
              <div className="absolute -bottom-10 -left-4 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                ⚡ Instant Response
              </div>
            </div>
          </div> 
              </div>

              {/* Floating benefit */}
              {/* <div className="absolute -top-2 -right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                70% Faster
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}