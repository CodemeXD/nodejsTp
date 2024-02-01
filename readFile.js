
// Appelle du système de fichier 

const fs = require('fs')

const data = fs.readFileSync('welcome.txt')

console.log(data.toString())