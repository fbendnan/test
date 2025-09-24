const generator = require("generate-password");

const password = generator.generate({
    length: 12,       // password length
    numbers: true,    // include numbers
    uppercase: true,  // include uppercase letters
    lowercase: true   // include lowercase letters
  })

console.log(password);