const dayjs = require('dayjs');
const express = require('express');
const app = express();
const timezone = require('dayjs/plugin/timezone');
const cors = require('cors');

dayjs.extend(timezone)

app.set('view engine', 'ejs');
app.use(cors());

app.get('/', function (req, res) {
  const tz = dayjs.tz.guess();
  const currentTime = dayjs().format('HH:mm:ss');
  const currentDate = dayjs().format('dddd, D MMM, YYYY');

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  res.json({data: { tz, currentTime, currentDate }}); 
});

app.listen(3030, function() {
  console.log('app listen to port 3030')
})
