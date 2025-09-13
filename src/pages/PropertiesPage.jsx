import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  MapPin, 
  Bed, 
  Bath, 
  Square,
  Heart,
  Eye,
  Star
} from 'lucide-react';
import { fetchProperties } from '../store/slices/propertySlice';
import { updateFilters, setViewMode, setSortBy } from '../store/slices/searchSlice';

const PropertiesPage = () => {
  const dispatch = useDispatch();
  const { properties, loading } = useSelector((state) => state.properties);
  const { filters, viewMode, sortBy } = useSelector((state) => state.search);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    dispatch(fetchProperties(filters));
  }, [dispatch, filters]);

  const handleFilterChange = (key, value) => {
    dispatch(updateFilters({ [key]: value }));
  };

  const handleSortChange = (value) => {
    dispatch(setSortBy(value));
  };

  const handleViewModeChange = (mode) => {
    dispatch(setViewMode(mode));
  };

  const PropertyCard = ({ property }) => (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={property.image || '/api/placeholder/400/300'}
          alt={property.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Heart className="w-4 h-4 text-neutral-600" />
          </button>
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Eye className="w-4 h-4 text-neutral-600" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded text-sm font-medium">
          {property.propertyType}
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-neutral-900 line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center text-sm text-neutral-600">
            <Star className="w-4 h-4 text-accent-500 fill-current mr-1" />
            {property.rating || '4.5'}
          </div>
        </div>
        
        <div className="flex items-center text-sm text-neutral-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {property.location}
        </div>
        
        <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              {property.bedrooms}
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              {property.bathrooms}
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              {property.area} sq ft
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-600">
            ₹{property.price?.toLocaleString()}
          </div>
          <button className="btn btn-primary">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-neutral-900 mb-2">
            Properties
          </h1>
          <p className="text-neutral-600">
            Discover your perfect property with AI-powered insights
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by location, property type, or keywords..."
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-outline flex items-center"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>

            {/* View Mode Toggle */}
            <div className="flex border border-neutral-300 rounded-lg">
              <button
                onClick={() => handleViewModeChange('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-neutral-600 hover:bg-neutral-100'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleViewModeChange('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-neutral-600 hover:bg-neutral-100'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="relevance">Most Relevant</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="area_asc">Area: Small to Large</option>
              <option value="area_desc">Area: Large to Small</option>
              <option value="date_desc">Newest First</option>
            </select>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="label block mb-2">Property Type</label>
                  <select
                    value={filters.propertyType}
                    onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                    className="input"
                  >
                    <option value="">All Types</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                    <option value="plot">Plot</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                <div>
                  <label className="label block mb-2">Price Range</label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="input"
                  >
                    <option value="">Any Price</option>
                    <option value="0-5000000">Under ₹50 Lakhs</option>
                    <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
                    <option value="10000000-20000000">₹1 Crore - ₹2 Crore</option>
                    <option value="20000000-50000000">₹2 Crore - ₹5 Crore</option>
                    <option value="50000000-100000000">₹5 Crore - ₹10 Crore</option>
                    <option value="100000000-999999999">Above ₹10 Crore</option>
                  </select>
                </div>

                <div>
                  <label className="label block mb-2">Bedrooms</label>
                  <select
                    value={filters.bedrooms}
                    onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                    className="input"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>

                <div>
                  <label className="label block mb-2">Bathrooms</label>
                  <select
                    value={filters.bathrooms}
                    onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
                    className="input"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Properties Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && properties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-neutral-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              No properties found
            </h3>
            <p className="text-neutral-600 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={() => dispatch(updateFilters({}))}
              className="btn btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;

