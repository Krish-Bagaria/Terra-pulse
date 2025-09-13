import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    location: '',
    propertyType: '',
    priceRange: { min: 0, max: Infinity },
    area: { min: 0, max: Infinity },
    bedrooms: '',
    bathrooms: '',
    amenities: [],
  },
  sortBy: 'relevance',
  viewMode: 'grid', // 'grid' or 'list'
  searchHistory: [],
  recentSearches: [],
  suggestions: [],
  isSearching: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
    addToSearchHistory: (state, action) => {
      const search = action.payload;
      const existingIndex = state.searchHistory.findIndex(
        item => JSON.stringify(item.filters) === JSON.stringify(search.filters)
      );
      
      if (existingIndex !== -1) {
        state.searchHistory.splice(existingIndex, 1);
      }
      
      state.searchHistory.unshift({
        ...search,
        timestamp: new Date().toISOString(),
      });
      
      // Keep only last 10 searches
      if (state.searchHistory.length > 10) {
        state.searchHistory = state.searchHistory.slice(0, 10);
      }
    },
    removeFromSearchHistory: (state, action) => {
      state.searchHistory = state.searchHistory.filter(
        (_, index) => index !== action.payload
      );
    },
    clearSearchHistory: (state) => {
      state.searchHistory = [];
    },
    setRecentSearches: (state, action) => {
      state.recentSearches = action.payload;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
    updateLocationFilter: (state, action) => {
      state.filters.location = action.payload;
    },
    updatePriceRange: (state, action) => {
      state.filters.priceRange = action.payload;
    },
    updateAreaRange: (state, action) => {
      state.filters.area = action.payload;
    },
    toggleAmenity: (state, action) => {
      const amenity = action.payload;
      const index = state.filters.amenities.indexOf(amenity);
      
      if (index === -1) {
        state.filters.amenities.push(amenity);
      } else {
        state.filters.amenities.splice(index, 1);
      }
    },
  },
});

export const {
  updateFilters,
  clearFilters,
  setSortBy,
  setViewMode,
  addToSearchHistory,
  removeFromSearchHistory,
  clearSearchHistory,
  setRecentSearches,
  setSuggestions,
  setIsSearching,
  updateLocationFilter,
  updatePriceRange,
  updateAreaRange,
  toggleAmenity,
} = searchSlice.actions;

export default searchSlice.reducer;

