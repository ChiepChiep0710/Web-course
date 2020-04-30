/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */
var fs=require('fs');
var axios=require('axios')
function docFile(){
  return new Promise(function(resolve,reject){
      fs.readFile('./data.json', { encoding: 'utf8'}, function(err, data) {
                resolve(data ) ;
  });
  }
  );
}
function getLink(){
  return axios.get('https://jsonplaceholder.typicode.com/todos/1');
}

async function run(){
  var result1=await docFile();
  var result2=await getLink().then(function(res){return res.data;});
return [result1,result2];
}
run().then(function(values){
  console.log(values);
});