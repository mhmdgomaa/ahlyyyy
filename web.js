  const express = require('express')
  const hbs = require('hbs')
  const fs = require('fs');

  var app = express();

app.use ( (req,res, next) =>
{  var now = new Date().toString()
   var s = `${now}: ${req.method} ${req.url}`

fs.appendFile('visitor.txt' , s + '\n' , (err)=>{
  if (err) {
    console.log('unable to connect with web.js');
  }
})

  next();})

  hbs.registerPartials(__dirname+'/views/partials')
  app.set('view engine','hbs')

hbs.registerHelper('year', ()=>{
  return  new Date().getFullYear()
})

  app.use(express.static(__dirname+'/Ahly'))

  app.get('/' , (req,res)=>
   {
     res.render(
       'ahly1.hbs' )}
 );

 app.listen(400)
