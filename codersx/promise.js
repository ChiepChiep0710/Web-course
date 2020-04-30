/*var request=require('request')
function load(path) {
    return new Promise(function(resolve,reject) {
      request(path, function (error, response, body) {
    if (error) {
      reject(error);
      } else {
      resolve(body);
      }
    });
    });
  }
  load('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(body) {
      console.log("Done:" , body);
    })
    .catch(function(error) {
      console.log(error);
    });
PROMISE.ALLL*/
var ax=require('axios')
var url1 = 'https://jsonplaceholder.typicode.com/todos/1';
var url2 = 'https://jsonplaceholder.typicode.com/todos/2';
var url3 ='https://jsonplaceholder.typicode.com/todos/3';
function downLinkPromise(link) {
    return new Promise(function (resolve, reject) {
        ax.get(link).then(function (response) {
               resolve(response);
            } ).catch (function(err){
                reject(err);
            });
        });
    };

Promise.all([
    downLinkPromise(url1),
    downLinkPromise(url2),
    downLinkPromise(url3),
]).then(function(values){
    console.log(values);
}).catch(function(err)
{
    console.log(err);
})
/*
node co
*/