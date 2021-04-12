// Import modules
import React from 'react';
import Header from './components/Header';
import Search from './pages/Search';
import Footer from './components/Footer';
import './App.css';

// App component function
function App() {
  return (
    <div id="app-wrapper">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

// Export component
export default App;
