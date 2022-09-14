const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function(request, response) {
  var n1 = Number(request.body.Weight);
  var n2 = Number(request.body.Height);
  var result = n1 / Math.pow(n2, 2);
  response.send("your BMI is " + result);
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
})
