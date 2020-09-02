const express=require('express');
const bodyParser=require('body-parser')
const app=express();
var ar=["hhgdgwdg","hhghghefhefh","njhvdhh"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
var d = new Date();
var n = d.getMonth();
var month="";
if(n===8)
{
month="september";

}
else
{
  month="ggh";

}
res.render('list', {getday:month,arr:ar});
});
app.post("/",function(req,res)
{
ar.push(req.body.newitem);
res.redirect("/");
});
app.listen(3000,function(req,res)
{
console.log("running");
});
