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
        // Create fullName property for each employee
        res.data.results.forEach((employee) => {
          employee.fullName = `${employee.name.first} ${employee.name.last}`;
        })

        // Assign mutated response array to results
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
              // Filter out any results that don't include the search string
              .filter((employee) => {
                // Capture filter field values
                let name = employee.name.first.toLowerCase();
                let phone = employee.cell;

                // Capture the current search string
                let search = this.state.search;

                // Determine whether user is searching by name, phone number, or neither
                if (search.match(/^[a-zA-Z]+$/)) {
                  return name.includes(search.toLowerCase());
                } else if (search.match(/^[0-9]+$/)) {
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
                    name={employee.fullName}
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
