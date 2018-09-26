firebase.initializeApp({
    apiKey:"AIzaSyA__1_LpdqvP1rc17NrXyOhls7XJqtVjg8",
    authDomain: "igproyecto-a5fb1.firebaseapp.com",
    projectId: "igproyecto-a5fb1"
  });


  //Initialize  cloud firestore through firebase

  var db = firebase.firestore();







function guardar(){

   

    var nombre = document.getElementById('nombre').value;


    var fecha = document.getElementById('fecha').value;

    var apellido = document.getElementById('apellido').value;







    db.collection("terceros").add({

        TerceroID: nombre,

        Tipodeterceros: fecha,

       Nombredeterceros: apellido

     


      

    })

    .then(function(docRef) {

        console.log("Document written with ID: ", docRef.id);

        document.getElementById('nombre').value = '';

        document.getElementById('apellido').value = '';

        document.getElementById('terceros').value = '';

    })

    .catch(function(error) {

        console.error("Error adding document: ", error);

    });

    

}



var tabla = document.getElementById('tabla');

db.collection("terceros").onSnapshot((querySnapshot) => {

    tabla.innerHTML = '';

    querySnapshot.forEach((doc) => {

        console.log(`${doc.id} => ${doc.data().TerceroID}`);

        tabla.innerHTML += `  
    
        <tr>
      
        <td>${doc.data().TerceroID}</td>
        <td>${doc.data().Tipodeterceros}</td>
        <td>${doc.data().Nombredeterceros}</td>
      
        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
        <td> <button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().TerceroID}','${doc.data().Tipodeterceros}', '${doc.data().Nombredeterceros}')">Editar</button></td>
      </tr>`

  

    });

});



function eliminar(id){

    

    db.collection("terceros").doc(id).delete().then(function() {

        console.log("Document successfully deleted!");

    }).catch(function(error) {

        console.error("Error removing document: ", error);

    });

    



}

function myFunction(){

    var input,filter,tabla,tr,td,i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    tabla = document.getElementById("tabla");
    tr = tabla.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        if(td){
            if(td.innerHTML.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";

            } else {
                tr[i].style.display = "none";
            }
        }
    }
}




function editar(id,nombre,apellido,fecha){

document.getElementById('nombre').value = nombre;

document.getElementById('apellido').value = apellido;

document.getElementById('fecha').value = fecha;



var boton = document.getElementById('boton');

boton.innerHTML = 'Editar';



boton.onclick = function(){

    

var washingtonRef = db.collection("terceros").doc(id);



var nombre = document.getElementById('nombre').value;

var apellido = document.getElementById('apellido').value;

var fecha = document.getElementById('fecha').value;







// Set the "capital" field of the city 'DC'

return washingtonRef.update({

  TerceroID: nombre,

  Nombredeterceros: apellido,

  Tipodeterceros: fecha

  

})

.then(function() {

    console.log("Document successfully updated!");

    boton.innerHTML = 'Guardar';

    document.getElementById('nombre').value = '';

    document.getElementById('apellido').value = '';

    

})

.catch(function(error) {

    // The document probably doesn't exist.

    console.error("Error updating document: ", error);

});

}

}