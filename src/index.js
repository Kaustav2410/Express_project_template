const {ServerConfig,Logger}  = require('./config');
const express = require('express');
const {} =require('./controllers');
const apiRoutes =require('./routes');
const app =express();

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,()=>{
   
    console.log(`Server is running on port ${ServerConfig.PORT}`);
    // Logger.info ("Successfully started the server","root",{msg:"Something"});
})