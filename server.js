//Following are the simple server side program that add the 2 numbers
//by using Node.js, and Express.js framework/package
let express = require('express'); 
let app = express();
let port = process.env.port || 7000;//seting up the port number
app.use(express.static(__dirname + '/'))//for directory we used the predefine __dirname follow by /

const bodyParser = require("body-parser");
/*It supports parsing of  post data
If you don't add this line you won't be able to parse the body of requests with application content type*/
app.use(bodyParser.urlencoded({extended: true}));

//get function used for rendering the html file that is index.html in our case
app.get('',(req,res)=>{
res.render('index.html')
});

//2nd get function is utilized for taking the values from the client
app.get('/addTwoNumbers',(req,res)=>{
    let num1= req.query.number1;
    let num2= req.query.number2;
    let result =parseInt(num1) + parseInt(num2);
    let code = 200;
    let msg = 'Addition of Two numbers';
    let resObj = {DATA:result, statusCode:code, message:msg}
    res.json(resObj);

});

//3rd get function is utilized for taking the values from the client
app.get('/mulTwoNumbers',(req,res)=>{
    let num1= req.query.number1;
    let num2= req.query.number2;
    let resmul =parseInt(num1) *  parseInt(num2);
    let codeMul = 200;
    let msgm = 'Multiplication of two numbers';
    let resObjMul = {DATA:resmul, statusCode:codeMul, message:msgm}
    //'1 vs 1
    res.json(resObjMul);
});

app.get("/", function(req, res){
    // res.send("this line of code is sent from server to port 7000 in response to the HTTP request from your browser");
    res.sendFile(__dirname + "/index.html");
})

//Post Method
app.post("/", function(req, res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    res.send("The result of two given number:<br>" + n1 + " + " + n2 + " = " + (n1 + n2) + '<br><a href="/"><button type="button">Add another numbers!</button></a>'
    );
})

app.listen(port, ()=>{
    console.log('server started')});
