const { parse } = require('csv-parse');
const fs = require('fs');

const result = [];

fs.createReadStream('datas.csv', { encoding: "utf-8" })
  .pipe(parse())
  .on('data', (data) => {
    result.push(data);
  })
  .on('end', () => {
    for(let a of result) {
      console.log(a);
    }
    
  });
