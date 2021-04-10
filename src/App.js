// Import modules
import React from 'react';
import Header from './components/Header';
import Search from './pages/Search';
import Footer from './components/Footer';

// App component function
function App() {
  const styles = {
    div: {
      minHeight: '100vh',
      paddingBottom: '75px',
      position: 'relative'
    }
  }
  
  return (
    <div style={styles.div}>
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

// Export modules
export default App;
