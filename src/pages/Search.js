// Import modules
import React, { Component } from 'react';
import Container from '../components/Container';
import SearchInput from '../components/SearchInput';
import Table from '../components/Table';
import ResultRow from '../components/ResultRow';
import API from '../utils/API';
import dayjs from 'dayjs';

// Classical search results container component
class Search extends Component {
  // Component state
  state = {
    search: '',
    results: [],
    sorted: false,
  };

  // Load employees when search components mounts
  componentDidMount = () => {
    this.getEmployees();
  };

  // Make API call requesting employees array
  getEmployees = () => {
    API.getEmployees()
      .then((res) => {

        // Create fullName property for each employee object
        res.data.results.forEach((employee) => {
          employee.fullName = `${employee.name.first} ${employee.name.last}`;
        });

        this.setState({ results: res.data.results });

        this.handleNameSort();
      })
      .catch((err) => console.log(err));
  };

  // Format DOB
  formatDate = (dob) => {
    return dayjs(dob).format('MM/DD/YYYY');
  };

  // Handle search field input change
  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  // Sort alphabetically by name
  handleNameSort = (event) => {
    // If the results haven't yet been sorted, sort them alphabetically
    // If they have, just reverse the results array to flip order direction

    if (!this.state.sorted) {
      const sortedArray = this.state.results.sort((a, b) => {
        if (a.fullName < b.fullName) {
          return -1;
        } else if (a.fullName > b.fullName) {
          return 1;
        }
        return 0;
      });

      // Set state to reflect sorted results
      this.setState({ sorted: true });
      this.setState({ results: sortedArray });

    } else {
      const reverseArray = this.state.results.reverse();
      this.setState({ results: reverseArray });
    }
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
          <Table handleNameSort={this.handleNameSort}>
            {/* The logic below adds the dynamic search capabilities */}
            {
              // Filter out any results that don't include the search string
              this.state.results
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
                })
            }
          </Table>
        </Container>
      </main>
    );
  }
}

// Export component
export default Search;
