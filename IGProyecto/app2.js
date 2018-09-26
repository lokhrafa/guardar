

firebase.initializeApp({

    apiKey:"AIzaSyB8uur9opblI_BmbAN2nPhzIttY0x229mo",

    authDomain: "igproyect-45685.firebaseapp.com",

    projectId: "igproyect-45685"

  });


  //Initialize  cloud firestore through firebase

  var db = firebase.firestore();







function guardar(){

   

   
  
 
   
    var apellido = document.getElementById('apellido').value;

    





    db.collection("clientes").add({

      

      Descripcion: apellido

     

      

    })

    .then(function(docRef) {

        console.log("Document written with ID: ", docRef.id);


        document.getElementById('apellido').value = '';

       

    })

    .catch(function(error) {

        console.error("Error adding document: ", error);

    });

    

}



var tabla = document.getElementById('tabla');

db.collection("clientes").onSnapshot((querySnapshot) => {

    tabla.innerHTML = '';

    querySnapshot.forEach((doc) => {

        console.log(`${doc.id} => ${doc.data().Descripcion}`);

        tabla.innerHTML += `  
    
        
     <tr>
     <td>${$('tbody tr').length + 1}</td>
       <td>${doc.data().Descripcion}</td>
        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
        <td> <button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().Descripcion}')">Editar</button></td>
      </tr>`

  

    });

});



function eliminar(id){

    

    db.collection("clientes").doc(id).delete().then(function() {

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




function editar(id,apellido){


document.getElementById('apellido').value = apellido;



var boton = document.getElementById('boton');

boton.innerHTML = 'Editar';



boton.onclick = function(){

    

var washingtonRef = db.collection("clientes").doc(id);





var apellido = document.getElementById('apellido').value;







// Set the "capital" field of the city 'DC'

return washingtonRef.update({



  Descripcion: apellido

  

})

.then(function() {

    console.log("Document successfully updated!");

    boton.innerHTML = 'Guardar';



    document.getElementById('apellido').value = '';

    

})

.catch(function(error) {

    // The document probably doesn't exist.

    console.error("Error updating document: ", error);

});

}

}