var express = require('express');

var app= express();
var PORT=3000;

var middleware = require('./middleware.js');

//app.use(middleware.requireAuthentication);  //öncesinde middleware e giriyor ;) dikkat , server i açaren değil..
                                            // browserdan server ı çağırınca ....

app.use(middleware.logger);
app.get('/',function (req,resp) {
resp.send('hello express!');
}); // iki arguman alıyor, 1. root u verdik, /help page yada /about page vs de olabilirdi
               //2. geçtiğimiz parametre bir fonksiyon, fnc ın ilk arg ı request objemiz..2. si response..
// req bildiğimiz request, kullanıcının geçtiği şeyler, url, json objesi,cookies vs


app.get('/about',middleware.requireAuthentication,function (req,resp) {
    resp.send('About us');
});

//console.log(__dirname);

app.use(express.static(__dirname+ '/public'));
app.listen(PORT,function () {
    console.log('express server was started on port '+ PORT);
});// hangi portta dinleeceğini specify ediyoruz..,ikinci arguman server çalıştıgında çalışan fnc..