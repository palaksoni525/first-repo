   const express=require('express');
   const app=express();
   const port=8000;




   app.listen(port,function(err)
   {
        if(err)
       {   console.log(`error in running the server:${err}`);
       return ;

       }
       console.log(`server is up on port:${port}`);
   });
