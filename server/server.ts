const express = require('express');

const app = express();

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Header','Oring, X-Requested-With, Content');
    res.header('Access-Control-Allow-Methods','OPTIONS,GET,POST,PUT,DELETE');
    if('OPTIONS' == req.method){
        res.sendStatus(200);
    }else{
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

app.get('/',(req,res)=> {
    res.send({hello:'jamal'});
});

app.listen(4201,'127.0.0.1',function () {
    console.log('ESCUCHANDO POR EL 4201');
    
})