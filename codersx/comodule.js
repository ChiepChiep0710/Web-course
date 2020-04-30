var co=require('co')
var axios=require('axios')
var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
  ];
function downloadLink(link) {
    return new Promise(function() {
      axios.get(link)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
      .finally(function () {});
    });
  }
  
  var downLink = co.wrap(function*(urls) {
    var values = yield urls.map(function(url) {
      return downloadLink(url);
    });
    return values;
  });
  
  downLink(urls).then(function(values) {
    console.log(values);
  });