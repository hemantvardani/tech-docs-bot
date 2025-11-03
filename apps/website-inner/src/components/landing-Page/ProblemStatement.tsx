export default function ProblemStatement() {
  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Problem Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
            The Hidden Cost of Complex Documentation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Sales Are Getting{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Delayed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every day your customers struggle with complex technical documentation, 
            your sales cycle gets longer and your support team gets overwhelmed.
          </p>
        </div>

        {/* Problem Stats + Solution Preview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left: The Problem */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">❌ The Problem Today</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-400">
                <div className="text-2xl font-bold text-red-600 mb-1">3-6 months</div>
                <div className="text-gray-700 font-medium">Average integration delay</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-orange-400">
                <div className="text-2xl font-bold text-orange-600 mb-1">40%</div>
                <div className="text-gray-700 font-medium">Of deals lost to confusion</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-400">
                <div className="text-2xl font-bold text-yellow-600 mb-1">200+</div>
                <div className="text-gray-700 font-medium">Support tickets per month</div>
              </div>
            </div>

            <div className="mt-6 bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="text-center text-red-700 font-semibold mb-3">Customer Journey Reality</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div>📄 Downloads docs → "This looks complex"</div>
                <div>🔍 Searches for help → "Can't find answers"</div>
                <div>🎫 Opens support ticket → "Let me ask support"</div>
                <div>⏱️ Waits 48 hours → "Maybe try a competitor"</div>
              </div>
            </div>
          </div>

          {/* Right: The Solution */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">✅ Our Solution</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-400">
                <div className="text-2xl font-bold text-green-600 mb-1">2 weeks</div>
                <div className="text-gray-700 font-medium">Average integration time</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-400">
                <div className="text-2xl font-bold text-blue-600 mb-1">80%</div>
                <div className="text-gray-700 font-medium">Fewer support tickets</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-400">
                <div className="text-2xl font-bold text-purple-600 mb-1">3x</div>
                <div className="text-gray-700 font-medium">Faster deal closure</div>
              </div>
            </div>

            <div className="mt-6 bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="text-center text-green-700 font-semibold mb-3">AI-Powered Customer Journey</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div>💬 Asks question → "How do I integrate?"</div>
                <div>⚡ Gets instant answer → "Here's exactly how"</div>
                <div>🚀 Integrates quickly → "This was easy!"</div>
                <div>😊 Happy customer → "Let's close the deal"</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transition to Solution */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What If Your Customers Could Get Instant, Perfect Answers?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Imagine cutting integration time from months to weeks, eliminating repetitive support tickets, 
              and turning your complex documentation into a competitive advantage.
            </p>
            <div className="text-blue-600 font-semibold">
              That's exactly what we do ↓
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}



