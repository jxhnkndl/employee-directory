/* eslint-disable import/no-anonymous-default-export */
// Import modules
import axios from 'axios';

// Export API request methods
export default {
  getEmployees: function() {
    return axios.get('https://randomuser.me/api/?seed=foobar&results=50');
  }
}