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
  };

  // Handle search input change
  handleInputChange = (event) => {
    const { value } = event.target;
    console.log(value);

    this.setState({ search: value });
  };

  // Render output
  render() {
    return (
      <main>
        <Container>
          <SearchInput
            value={this.state.search}
            handleInputChange={this.handleInputChange}
          />
          <Table>
            {this.state.results
              // First, filter out any results that don't include the search string
              .filter((employee) => {
                // Capture regex patterns for only letters and only numbers
                let letters = /^[a-zA-Z]+$/;
                let numbers = /^[0-9]+$/;

                // Capture comparison fields
                let name = employee.name.first.toLowerCase();
                let phone = employee.cell;

                // Capture the current state of the search string
                let search = this.state.search;

                // Determine whether user is searching by name, phone number, or neither
                if (letters.test(search)) {
                  return name.includes(search.toLowerCase());

                } else if (numbers.test(search)) {
                  return phone.includes(search);

                } else {  
                  return employee;
                }
              })
              // Then map the remaining results and create table rows for each
              .map((employee, index) => {
                return (
                  <ResultRow
                    key={index}
                    id={index}
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
