// connection to database
const config={
 "dbconn": {
    server: 'localhost',
   user: 'sa',
   password: '123456',
   database: 'ImageUploadDB',

   options: {
       encrypt: true, // Use this if you're on Windows Azure
       enableArithAbort : true
   }
},
"port":process.env.PORT || 3007,
"apikey":'VAaIOB7yU8M-0yEB1x8JUQRldHZJ9wz0RZZHgbfzBz',
};
module.exports=config;