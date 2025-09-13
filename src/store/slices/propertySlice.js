import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  properties: [],
  currentProperty: null,
  savedProperties: [],
  loading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0,
  },
};

// Async thunks
export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/properties', { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch properties');
    }
  }
);

export const fetchPropertyById = createAsyncThunk(
  'properties/fetchPropertyById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/properties/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch property');
    }
  }
);

export const saveProperty = createAsyncThunk(
  'properties/saveProperty',
  async (propertyId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/properties/${propertyId}/save`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to save property');
    }
  }
);

export const unsaveProperty = createAsyncThunk(
  'properties/unsaveProperty',
  async (propertyId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/properties/${propertyId}/save`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to unsave property');
    }
  }
);

export const fetchSavedProperties = createAsyncThunk(
  'properties/fetchSavedProperties',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/properties/saved');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch saved properties');
    }
  }
);

export const getPricePrediction = createAsyncThunk(
  'properties/getPricePrediction',
  async (propertyData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/ai/predict-price', propertyData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get price prediction');
    }
  }
);

const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentProperty: (state) => {
      state.currentProperty = null;
    },
    updatePropertyFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Properties
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload.properties;
        state.pagination = action.payload.pagination;
        state.error = null;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Property by ID
      .addCase(fetchPropertyById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPropertyById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentProperty = action.payload;
        state.error = null;
      })
      .addCase(fetchPropertyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Save Property
      .addCase(saveProperty.fulfilled, (state, action) => {
        state.savedProperties.push(action.payload);
      })
      // Unsave Property
      .addCase(unsaveProperty.fulfilled, (state, action) => {
        state.savedProperties = state.savedProperties.filter(
          property => property.id !== action.payload.propertyId
        );
      })
      // Fetch Saved Properties
      .addCase(fetchSavedProperties.fulfilled, (state, action) => {
        state.savedProperties = action.payload;
      });
  },
});

export const { clearError, clearCurrentProperty, updatePropertyFilters } = propertySlice.actions;
export default propertySlice.reducer;

