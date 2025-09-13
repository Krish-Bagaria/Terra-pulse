import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  MapPin, 
  BarChart3, 
  Shield, 
  Zap,
  Users,
  Award,
  Building,
  Calculator,
  Target,
  CheckCircle
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'AI Price Predictions',
      description: 'Get accurate property price predictions powered by advanced machine learning algorithms.',
    },
    {
      icon: Calculator,
      title: 'ROI Analysis',
      description: 'Calculate potential returns on investment with comprehensive financial analysis tools.',
    },
    {
      icon: MapPin,
      title: 'Location Intelligence',
      description: 'Access detailed insights about neighborhoods, amenities, and market trends.',
    },
    {
      icon: TrendingUp,
      title: 'Market Trends',
      description: 'Stay updated with real-time market data and price trend analysis.',
    },
    {
      icon: Shield,
      title: 'Verified Data',
      description: 'All property data is verified and updated regularly for accuracy.',
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get instant property insights and predictions in real-time.',
    },
  ];

  const stats = [
    { number: '50K+', label: 'Properties Analyzed' },
    { number: '95%', label: 'Prediction Accuracy' },
    { number: '25+', label: 'Cities Covered' },
    { number: '10K+', label: 'Happy Users' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Real Estate Investor',
      content: 'TerraPulse helped me make informed investment decisions with their accurate price predictions.',
      avatar: 'RK',
    },
    {
      name: 'Priya Sharma',
      role: 'Home Buyer',
      content: 'The ROI calculator saved me from making a costly mistake. Highly recommended!',
      avatar: 'PS',
    },
    {
      name: 'Amit Patel',
      role: 'Property Developer',
      content: 'The market insights and trend analysis are incredibly valuable for our business.',
      avatar: 'AP',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight">
                AI-Powered Real Estate
                <span className="text-accent-400"> Intelligence</span>
              </h1>
              <p className="text-xl text-primary-100 max-w-lg">
                Make smarter property investment decisions with accurate price predictions, 
                ROI analysis, and comprehensive market insights for the Indian real estate market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="btn btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/properties"
                  className="btn btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600"
                >
                  Explore Properties
                </Link>
              </div>
            </div>
            
            {/* Hero Image/Animation */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-primary-200">TerraPulse Dashboard</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Property Value</span>
                        <TrendingUp className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="text-2xl font-bold">₹2.5 Cr</div>
                      <div className="text-sm text-green-400">+12% from last year</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-sm text-primary-200">ROI</div>
                        <div className="text-lg font-bold">8.5%</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-sm text-primary-200">Prediction</div>
                        <div className="text-lg font-bold">95%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Powerful Features for Smart Investing
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Everything you need to make informed real estate decisions, powered by cutting-edge AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              How TerraPulse Works
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Get started in three simple steps and unlock the power of AI-driven real estate intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Search Properties
              </h3>
              <p className="text-neutral-600">
                Browse through thousands of verified properties across major Indian cities with advanced filters.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Get AI Insights
              </h3>
              <p className="text-neutral-600">
                Receive accurate price predictions, ROI analysis, and market insights powered by machine learning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Make Decisions
              </h3>
              <p className="text-neutral-600">
                Make informed investment decisions with comprehensive data and expert recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Join thousands of satisfied users who have made smarter real estate investments with TerraPulse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-neutral-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-neutral-600 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex text-accent-500 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Ready to Transform Your Real Estate Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join TerraPulse today and start making smarter property investment decisions with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="btn bg-white text-primary-600 hover:bg-neutral-100 text-lg px-8 py-4"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="btn border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

