import React from 'react';
import { 
  Search, 
  TrendingUp, 
  MapPin, 
  Heart, 
  BarChart3,
  Building,
  Calculator,
  Target
} from 'lucide-react';

const DashboardPage = () => {
  const stats = [
    { title: 'Total Searches', value: '24', icon: Search, change: '+12%' },
    { title: 'Saved Properties', value: '8', icon: Heart, change: '+2' },
    { title: 'Predictions Used', value: '15', icon: BarChart3, change: '+5' },
    { title: 'ROI Calculated', value: '12', icon: Calculator, change: '+3' },
  ];

  const recentSearches = [
    { location: 'Mumbai, Maharashtra', type: 'Apartment', price: '₹2.5 Cr', date: '2 hours ago' },
    { location: 'Bangalore, Karnataka', type: 'Villa', price: '₹4.2 Cr', date: '1 day ago' },
    { location: 'Delhi, NCR', type: 'House', price: '₹1.8 Cr', date: '3 days ago' },
  ];

  const savedProperties = [
    { title: 'Luxury Apartment in Bandra', location: 'Mumbai', price: '₹3.2 Cr', image: '/api/placeholder/300/200' },
    { title: 'Modern Villa in Whitefield', location: 'Bangalore', price: '₹5.5 Cr', image: '/api/placeholder/300/200' },
    { title: 'Penthouse in Gurgaon', location: 'Delhi NCR', price: '₹4.8 Cr', image: '/api/placeholder/300/200' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-neutral-900 mb-2">
            Dashboard
          </h1>
          <p className="text-neutral-600">
            Welcome back! Here's your real estate activity overview.
          </p>
        </div>

        {/* Quick Search */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">Quick Search</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search properties, locations..."
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <button className="btn btn-primary px-8">
              Search
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-600 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-neutral-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-green-600">
                      {stat.change}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Searches */}
          <div className="card">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Recent Searches</h2>
            <div className="space-y-4">
              {recentSearches.map((search, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div>
                    <p className="font-medium text-neutral-900">{search.location}</p>
                    <p className="text-sm text-neutral-600">{search.type} • {search.price}</p>
                  </div>
                  <div className="text-sm text-neutral-500">
                    {search.date}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 btn btn-outline">
              View All Searches
            </button>
          </div>

          {/* Saved Properties */}
          <div className="card">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Saved Properties</h2>
            <div className="space-y-4">
              {savedProperties.map((property, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-neutral-50 rounded-lg">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-neutral-900 line-clamp-1">
                      {property.title}
                    </p>
                    <p className="text-sm text-neutral-600">{property.location}</p>
                    <p className="text-sm font-semibold text-primary-600">{property.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 btn btn-outline">
              View All Saved
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">AI Predictions</h3>
                  <p className="text-sm text-neutral-600">Get price predictions</p>
                </div>
              </div>
            </div>

            <div className="card hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">ROI Calculator</h3>
                  <p className="text-sm text-neutral-600">Calculate returns</p>
                </div>
              </div>
            </div>

            <div className="card hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Map View</h3>
                  <p className="text-sm text-neutral-600">Explore locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

