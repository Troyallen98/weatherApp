const axios = require('axios');
axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=842f310df546f3f6576c58901e06220a')
  .then(function (response) {
    // handle successnpm
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  //response. data. item. temp