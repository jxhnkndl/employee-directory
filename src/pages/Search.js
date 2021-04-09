// Import modules
import React, { Component } from 'react';
import Container from '../components/Container';
import SearchInput from '../components/SearchInput';
import Table from '../components/Table';
import API from '../utils/API';

// Create search results container
class Search extends Component {
  state = {
    search: "",
    results: []
  }

  componentDidMount = () => {
    this.getEmployees();
  }

  getEmployees = () => {
    API.getEmployees()
      .then(res => {
        this.setState({ results: res.data.results });
        console.log(this.state);;
      })
      .catch(err => console.log(err));
  }

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