/* eslint-disable import/no-anonymous-default-export */
// Import modules
import axios from 'axios';

// Endpoint
const endpoint = `https://randomuser.me/api/?seed=bootcamp&results=50&nat=us`;

// Export API request methods
export default {
  getEmployees: function() {
    return axios.get(endpoint);
  }
}