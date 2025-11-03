export default function Features() {
    const features = [
      {
        title: 'AI-Powered Chat',
        description: 'Get instant answers from your technical documentation using advanced AI',
        icon: '🤖',
      },
      {
        title: 'Smart Search',
        description: 'Find relevant information quickly with intelligent search capabilities',
        icon: '🔍',
      },
      {
        title: 'Easy Integration',
        description: 'Seamlessly integrate with your existing documentation workflow',
        icon: '🔗',
      },
      {
        title: 'Real-time Updates',
        description: 'Keep your documentation chatbot up-to-date with automatic syncing',
        icon: '⚡',
      },
    ];
  
    return (
      <div id="Features" className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Powerful Features
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transform your technical documentation into an intelligent, interactive experience
            </p>
          </div>
  
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
  
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Transform your documentation into an AI-powered knowledge base today
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    );
  }
  