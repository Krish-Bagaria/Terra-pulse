import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import Toast from '../ui/Toast';
import { loadUser } from '../../store/slices/authSlice';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.ui);
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    // Load user on app start if token exists
    if (localStorage.getItem('token') && !isAuthenticated) {
      dispatch(loadUser());
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className={`min-h-screen bg-neutral-50 ${theme === 'dark' ? 'dark' : ''}`}>
      <Header />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
      
      {/* Toast Notifications */}
      <Toast />
      
      {/* Loading Overlay */}
      {loading.global && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600"></div>
            <span className="text-neutral-700">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;

