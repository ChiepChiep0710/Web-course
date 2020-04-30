var fs = require('fs')
var readFile = fs.readFileSync('./data.json',{encoding :'utf8'})
var converseFileToObject = JSON.parse(readFile)
console.log(converseFileToObject.name)

converseFileToObject.members = [
    {
        name : 'NMH',
        age : 21,
        gender : 'Male'
    }
]

var converseFileToJSON = JSON.stringify(converseFileToObject)
fs.writeFileSync('./data.json',converseFileToJSON)