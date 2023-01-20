document.getElementById("descripcion").style.display='none';



//escuchando los eventos click en la barra de navegacion para reemplazar el texto en la etiqueta H3 con etiqueta contacto
document.getElementById('celular').addEventListener('click', function(){

    document.getElementById("contacto").innerHTML="01234-5678909";
});
document.getElementById('correo').addEventListener('click', function(){
 
    document.getElementById("contacto").innerHTML="micorreoengmail@gmail.com";
});
/*document.getElementById('telefono').addEventListener('click', function(){

    document.getElementById("contacto").innerHTML="02966-431785";
});*/
document.getElementById('linkedIn').addEventListener('click', function(){

    document.getElementById("contacto").innerHTML="Mi perfil en LinkedIn";
});


//se da funcionalidad a los botones Personal, Educativa y Profecional 

document.getElementById('personalboton').addEventListener('click', function(){
   document.getElementById("descripcion").style.display='block';
    //console.log("hace clik personal")
    document.getElementById("personaldiv").style.display='block';
    document.getElementById("edicativodiv").style.display='none';
    document.getElementById("profecionaldiv").style.display='none';
    document.getElementById("titulodivdiv").style.display='none';
});

document.getElementById('educativoboton').addEventListener('click', function(){
   document.getElementById("descripcion").style.display='block';
    //console.log("hace clik educativo")
    document.getElementById("personaldiv").style.display='none';
    document.getElementById("edicativodiv").style.display='block';
    document.getElementById("profecionaldiv").style.display='none';
    document.getElementById("titulodivdiv").style.display='none';
});
document.getElementById('profecionalboton').addEventListener('click', function(){
   document.getElementById("descripcion").style.display='block';
    //console.log("hace clik profecional")
    document.getElementById("personaldiv").style.display='none';
    document.getElementById("edicativodiv").style.display='none';
    document.getElementById("titulodivdiv").style.display='none';
    document.getElementById("profecionaldiv").style.display='block';
});
document.getElementById('tituloboton').addEventListener('click', function(){
   document.getElementById("descripcion").style.display='block';
    //console.log("hace clik profecional")
    document.getElementById("personaldiv").style.display='none';
    document.getElementById("edicativodiv").style.display='none';
    document.getElementById("profecionaldiv").style.display='none';
    document.getElementById("titulodivdiv").style.display='block';
});