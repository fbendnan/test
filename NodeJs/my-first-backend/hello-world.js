console.log("hello world !")

const http = require("http");
const fs = require("fs");

const fileName = "welcome.txt";
const fileContent = "Hello Node";

fs.writeFile(fileName, fileContent,(err) =>{
    if (err) {
    console.error('Error creating or writing to file:', err);
    return;
  }
  console.log(`${fileName} created and content written successfully.`);
})

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
})

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log("server runing at http://localhost:3000/");
});


