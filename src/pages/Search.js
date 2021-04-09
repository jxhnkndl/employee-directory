// Import modules
import React, { Component } from 'react';
import Container from '../components/Container';
import SearchInput from '../components/SearchInput';
import Table from '../components/Table';
import ResultRow from '../components/ResultRow';
import API from '../utils/API';
import dayjs from 'dayjs';

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

  // Format DOB utility method
  formatDate = (dob) => {
    return dayjs(dob).format('MM/DD/YYYY');
  }

  // Render output
  render() {
    return (
      <main>
        <Container>
          <SearchInput />
          <Table>
            {/* Map over results array and create new row for each result */}
            {this.state.results.map((employee, index) => {
              return (
                <ResultRow 
                  id={employee.index}
                  image={employee.picture.thumbnail}
                  name={`${employee.name.first} ${employee.name.last}`}
                  phone={employee.cell}
                  email={employee.email}
                  dob={this.formatDate(employee.dob.date)}
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
