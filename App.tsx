import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Business from './components/Business';
import Billing from './components/Billing';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Login from './pages/Login';
import AdminLayout from './layouts/AdminLayout';
import ClientLayout from './layouts/ClientLayout';

type UserRole = 'guest' | 'admin' | 'client';

const ChatBubbleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.917-.464-1.255a1.125 1.125 0 01-1.27-1.21C3.606 15.238 3.375 14.364 3.375 13.5 3.375 8.944 7.404 5.25 12.375 5.25c4.97 0 9 3.75 9 8.25z" />
    </svg>
);

const LandingPage: React.FC = () => (
    <div className="bg-white min-h-screen">
      <div className="w-full bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
      </div>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Stats />
          <Business />
          <Billing />
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </main>

       <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </div>

      <button
        aria-label="Open chat"
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <ChatBubbleIcon />
      </button>
    </div>
);


const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>('guest');
  const [location, setLocation] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setLocation(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    window.location.hash = role === 'admin' ? '/admin/dashboard' : '/client/agents';
  };

  const handleLogout = () => {
    setUserRole('guest');
    window.location.hash = '/';
  };

  const renderContent = () => {
    if (location.startsWith('#/admin') && userRole === 'admin') {
      return <AdminLayout onLogout={handleLogout} />;
    }
    
    if (location.startsWith('#/client') && userRole === 'client') {
      return <ClientLayout onLogout={handleLogout} />;
    }

    if (location.startsWith('#/login')) {
      return <Login onLogin={handleLogin} />;
    }

    return <LandingPage />;
  };

  return <>{renderContent()}</>;
};

export default App;