import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  sidebarOpen: false,
  mobileMenuOpen: false,
  notifications: [],
  loading: {
    global: false,
    properties: false,
    auth: false,
    search: false,
  },
  modals: {
    login: false,
    register: false,
    propertyDetails: false,
    pricePrediction: false,
    contactAgent: false,
  },
  toast: {
    show: false,
    message: '',
    type: 'info', // 'success', 'error', 'warning', 'info'
  },
  map: {
    center: [28.6139, 77.2090], // Delhi coordinates
    zoom: 10,
    selectedProperty: null,
    showHeatMap: false,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setMobileMenuOpen: (state, action) => {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    addNotification: (state, action) => {
      state.notifications.push({
        id: Date.now(),
        ...action.payload,
        timestamp: new Date().toISOString(),
      });
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      );
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
    setLoading: (state, action) => {
      const { key, value } = action.payload;
      state.loading[key] = value;
    },
    setGlobalLoading: (state, action) => {
      state.loading.global = action.payload;
    },
    openModal: (state, action) => {
      state.modals[action.payload] = true;
    },
    closeModal: (state, action) => {
      state.modals[action.payload] = false;
    },
    closeAllModals: (state) => {
      Object.keys(state.modals).forEach(key => {
        state.modals[key] = false;
      });
    },
    showToast: (state, action) => {
      state.toast = {
        show: true,
        message: action.payload.message,
        type: action.payload.type || 'info',
      };
    },
    hideToast: (state) => {
      state.toast.show = false;
    },
    updateMapCenter: (state, action) => {
      state.map.center = action.payload;
    },
    updateMapZoom: (state, action) => {
      state.map.zoom = action.payload;
    },
    setSelectedProperty: (state, action) => {
      state.map.selectedProperty = action.payload;
    },
    toggleHeatMap: (state) => {
      state.map.showHeatMap = !state.map.showHeatMap;
    },
  },
});

export const {
  setTheme,
  toggleTheme,
  setSidebarOpen,
  toggleSidebar,
  setMobileMenuOpen,
  toggleMobileMenu,
  addNotification,
  removeNotification,
  clearNotifications,
  setLoading,
  setGlobalLoading,
  openModal,
  closeModal,
  closeAllModals,
  showToast,
  hideToast,
  updateMapCenter,
  updateMapZoom,
  setSelectedProperty,
  toggleHeatMap,
} = uiSlice.actions;

export default uiSlice.reducer;

