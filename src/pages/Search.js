// Import modules
import React, { Component } from 'react';
import Container from '../components/Container';
import SearchInput from '../components/SearchInput';
import Table from '../components/Table';
import ResultRow from '../components/ResultRow';
import API from '../utils/API';

// Create search results container
class Search extends Component {
  // Component state
  state = {
    search: '',
    results: [],
  };

  // Load employees when search components mounts
  componentDidMount = () => {
    this.getEmployees();
  };

  // Make API call requesting employees array
  getEmployees = () => {
    API.getEmployees()
      .then((res) => {
        this.setState({ results: res.data.results });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  };

  // Render output
  render() {
    return (
      <main>
        <Container>
          <SearchInput />
          <Table>
            {this.state.results.map((employee, index) => {
              return (
                <ResultRow 
                  id={employee.index}
                  image={employee.picture.thumbnail}
                  name={`${employee.name.first} ${employee.name.last}`}
                  phone={'804-888-8080'}
                  email={employee.email}
                  dob={'05/19/1983'}
                />
              );
            })}
          </Table>
        </Container>
      </main>
    );
  }
}

// Export Search class
export default Search;
