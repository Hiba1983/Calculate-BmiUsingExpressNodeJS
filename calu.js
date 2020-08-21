const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
// home ROUTE - get theCalculate information to server
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html"); // use senfFile becouse will load index.html information
});
// hOME rOUTE - post method Calculate the result from server using bodyParser.
app.post("/",function(req,res){
  var n1 =Number(req.body.n1);
  var n2 =Number(req.body.n2);
  var result = n1 + n2;

  res.send("The result is " + result);

});
// bmi Route - get
app.get("/bmiCalu",function(req,res){
  res.sendFile(__dirname + "/bmiCalu.html"); // use senfFile becouse will load index.html information
});
//bmi Route -  post method BMI Calculator
app.post("/bmiCalu",function(req,res){
  var weight =parseFloat(req.body.weight);
  var height =parseFloat(req.body.height);
  var result = weight / (height * height);
  res.send("The result is " + result);
});
app.listen(3000,function(){
  console.log("server on port 3000");
});
