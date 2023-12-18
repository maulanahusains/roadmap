const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

fs.readFile('tulisan.txt', (err, text) => {
    if(err) console.log(err);
    console.log(text.toString());
});

setTimeout(() => {
    readline.question('apakah ingin mengganti isi file tersebut?(y/n): ', opt => {
        if(opt == 'n') return readline.close();
        
        readline.question('silahkan masukan text baru: ', txt => {
            fs.writeFile('tulisan.txt', txt, (err) => {
                if(err) console.log(err);
                console.log('Text berhasil diubah');
            });
            readline.close();
        });
    });
}, 2000);

