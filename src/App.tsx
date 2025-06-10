import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProductRegistration } from './components/ProductRegistration';
import { ProductLookup } from './components/ProductLookup';
import { Dashboard } from './components/Dashboard';
import { ProductDetail } from './components/ProductDetail';

export type Page = 'home' | 'register' | 'lookup' | 'dashboard' | 'product';

interface AppState {
  currentPage: Page;
  selectedProductId?: string;
}

function App() {
  const [appState, setAppState] = useState<AppState>({ currentPage: 'home' });

  const navigateTo = (page: Page, productId?: string) => {
    setAppState({ currentPage: page, selectedProductId: productId });
  };

  const renderPage = () => {
    switch (appState.currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'register':
        return <ProductRegistration onNavigate={navigateTo} />;
      case 'lookup':
        return <ProductLookup onNavigate={navigateTo} />;
      case 'dashboard':
        return <Dashboard onNavigate={navigateTo} />;
      case 'product':
        return <ProductDetail productId={appState.selectedProductId} onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header currentPage={appState.currentPage} onNavigate={navigateTo} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;