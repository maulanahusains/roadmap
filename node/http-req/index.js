const https = require('https');

https.get('https://dummyjson.com/products?limit=10', (res) => {
    let datas = [];

    res.on('data', data => {
        datas.push(data);
    });

    res.on('end', () => {
        const parsedData = JSON.parse(Buffer.concat(datas).toString());
        console.log(parsedData);
        console.log('\n\n\nresponse ended');
        console.log('status code: '+res.statusCode);
        datas = [];
    })
}).on('error', err => console.error(err))