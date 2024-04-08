const express =require("express");

const users = require("./MOCK_DATA.json");
const app = express();
const port = 3000;
app.get('/users', (req , res) =>{
   return res.json (users);
}) ;


 app.listen(port , ()=> console.log('server started at port'));
  //app.listen(port, () => console.log(`Server started at port ${port}`));pm start
