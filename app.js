const express=require('express');// requiero el módulo express, instalado previamente con npm install express
const app=express(); // almaceno en la variable app la ejecución de la función express
const path=require('path'); //requiero el modulo nativo de node path y lo guardo en la variable path
const pathPublic=path.resolve(__dirname,'./public');/* almaceno en la variable pathPublic la ruta absoluta de la
carpeta public*/

app.use(express.static(pathPublic))/* uso el método de express use para decirle a indicarle a express que puedo
disponer del contenido estático de la carpeta public*/



app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});


app.listen(3000,()=>{console.log('Servidor corriendo en el puerto 3000');});
app.get

