const axios = require('axios');
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
  ];
async function fetchUrlsParallel(urls) {
    const results = await Promise.all(
      urls.map(function(url) {
        return axios.get(url);
      })
    );
    return results;
  }
  fetchUrlsParallel(urls).then(function(value){
      console.log(value);})
  
      