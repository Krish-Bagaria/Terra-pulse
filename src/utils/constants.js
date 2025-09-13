export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROPERTIES: '/properties',
  PROPERTY_DETAILS: '/properties/:id',
  AI_PREDICTIONS: '/ai-predictions',
  PROFILE: '/profile',
  MAP: '/map',
  SEARCH: '/search',
};

export const PROPERTY_TYPES = [
  { value: 'apartment', label: 'Apartment' },
  { value: 'house', label: 'House' },
  { value: 'villa', label: 'Villa' },
  { value: 'plot', label: 'Plot' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'office', label: 'Office' },
];

export const AMENITIES = [
  { id: 'parking', label: 'Parking', icon: 'Car' },
  { id: 'gym', label: 'Gym', icon: 'Dumbbell' },
  { id: 'swimming_pool', label: 'Swimming Pool', icon: 'Waves' },
  { id: 'garden', label: 'Garden', icon: 'Trees' },
  { id: 'security', label: '24/7 Security', icon: 'Shield' },
  { id: 'elevator', label: 'Elevator', icon: 'ArrowUpDown' },
  { id: 'balcony', label: 'Balcony', icon: 'Home' },
  { id: 'terrace', label: 'Terrace', icon: 'Sun' },
];

export const CITIES = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata',
  'Pune', 'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow', 'Kanpur',
  'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad',
  'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik'
];

export const PRICE_RANGES = [
  { min: 0, max: 5000000, label: 'Under ₹50 Lakhs' },
  { min: 5000000, max: 10000000, label: '₹50 Lakhs - ₹1 Crore' },
  { min: 10000000, max: 20000000, label: '₹1 Crore - ₹2 Crore' },
  { min: 20000000, max: 50000000, label: '₹2 Crore - ₹5 Crore' },
  { min: 50000000, max: 100000000, label: '₹5 Crore - ₹10 Crore' },
  { min: 100000000, max: Infinity, label: 'Above ₹10 Crore' },
];

export const SORT_OPTIONS = [
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'area_asc', label: 'Area: Small to Large' },
  { value: 'area_desc', label: 'Area: Large to Small' },
  { value: 'date_desc', label: 'Newest First' },
  { value: 'date_asc', label: 'Oldest First' },
  { value: 'relevance', label: 'Most Relevant' },
];

