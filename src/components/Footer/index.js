// Import modules
import React from 'react';

// Functional component declaration
function Footer() {

  const styles = {
    footer: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0
    }
  }

  return (
    <footer style={styles.footer} className="bg-primary p-1">
      <p className="mb-0 text-center text-light">
        For Interal Use Only
      </p>
    </footer>
  );
}

// Export component
export default Footer;