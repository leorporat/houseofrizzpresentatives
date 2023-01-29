const fs = require('fs')

var femaleImages;
var femaleNames;
var maleImages;
var maleNames;

fs.readFile('congressmaleimages.txt', 'utf8', (err, data) => {
    if(err)throw err;
    maleImages = data.split('\n')
})

fs.readFile('congressfemaleimages.txt', 'utf8', (err, data) => {
    if(err)throw err;
    femaleImages = data.split('\n')
})

fs.readFile('congressfemalenames.txt', 'utf8', (err, data) => {
    if(err)throw err;
    femaleNames = data.split('\n')
})

fs.readFile('congressmalenames.txt', 'utf8', (err, data) => {
    if(err)throw err;
    maleNames = data.split('\n')
})

function makeObjects(names, images) {
    var arr = []
    for(let i = 0; i < names.length; i++) {
        temp = {name: names[i], image: images[i]}
        arr.push(temp)
    }
    return arr;
}