// Import modules
import React, { Component } from 'react';
import Container from '../components/Container';
import SearchInput from '../components/SearchInput';
import Table from '../components/Table';

// Create search results container
class Search extends Component {
  

  render() {
    return (
      <main>
        <Container>
          <SearchInput />
          <Table />
        </Container>
      </main>
    );
  }
}

// Export Search class
export default Search;