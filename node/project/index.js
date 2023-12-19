const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require("fs");

//* bisa di modifikasi lagi, kaya ngambil input dari user untuk nama baru file nya. sama custom directory biar lebih dinamis

const getFiles = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        console.log(file);
      });
}

readline.question('Where folder you want to edit (./example/folder/)? ', (jawaban) => {
    console.log(jawaban)
    getFiles(jawaban);

    readline.question('mau diganti menjadi nama apa filenya? (tanpa ekstensi .js, .html, ...) :', name => {
        readline.question('apa ekstetensinya? (cukup nama saja, js html .....): ', ekstensi => {
            fs.readdirSync(jawaban).forEach((file, i) => {         
                fs.rename(`${jawaban}${file}`, `${jawaban}${name}${i + 1}.${ekstensi}`, () => {
                    console.log(`${file} file renamed! menjadi: ${name}${i + 1}.${ekstensi}`);
                });
            });
            // getFiles(jawaban);
            readline.close();
        });
    });
});
