
firebase.initializeApp({

    apiKey:"AIzaSyB8uur9opblI_BmbAN2nPhzIttY0x229mo",

    authDomain: "igproyect-45685.firebaseapp.com",

    projectId: "igproyect-45685"

  });



var db = firebase.firestore();



  
 






function guardar(){

   

    

    var apellido = document.getElementById('apellido').value;

     var fecha = document.getElementById('fecha').value;

    var productoid = document.getElementById('productoid').value;

    var asociadoid = document.getElementById('asociadoid').value;

    var fechainicio = document.getElementById('fechainicio').value;

    var fechafinal = document.getElementById('fechafinal').value;





    db.collection("users").add({

       

        Descripcion: apellido,

        clienteID: fecha,

        productoID: productoid,

        asociadoID: asociadoid,

        fechaInicio: fechainicio,

        fechaFinal: fechafinal


    })

    .then(function(docRef) {

        console.log("Document written with ID: ", docRef.id);

     

        document.getElementById('apellido').value = '';

        document.getElementById('fecha').value = '';

        document.getElementById('productoid').value = '';

        document.getElementById('asociadoid').value = '';

        document.getElementById('fechainicio').value = '';

        document.getElementById('fechafinal').value = '';

    })

    .catch(function(error) {

        console.error("Error adding document: ", error);

    });

    

}

var tabla = document.getElementById('tabla');

db.collection("users").onSnapshot((querySnapshot) => {

    tabla.innerHTML = '';

    querySnapshot.forEach((doc) => {

        console.log(`${doc.id} => ${doc.data().Descripcion}`);

        tabla.innerHTML += `  
        <tr>
        <td>${$('tbody tr').length + 1}</td>
        <td>${doc.data().Descripcion}</td>
        <td>${doc.data().clienteID}</td>
        <td> ${doc.data().productoID}</td>
        <td> ${doc.data().asociadoID}</td>
        <td> ${doc.data().fechaInicio}</td>
        <td> ${doc.data().fechaFinal}</td>
        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
        <td> <button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().Descripcion}','${doc.data().clienteID}','${doc.data().productoID}','${doc.data().asociadoID}','${doc.data().fechaInicio}','${doc.data().fechaFinal}')">Editar</button></td>
      </tr>`
      
  
  

    });

});







function eliminar(id){

    

    db.collection("users").doc(id).delete().then(function() {

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



function editar(id,nombre,apellido,fecha,productoid,asociadoid,fechainicio,fechafinal){



document.getElementById('apellido').value = apellido;

document.getElementById('fecha').value = fecha;

document.getElementById('productoid').value = productoid;

document.getElementById('asociadoid').value = asociadoid;
 
document.getElementById('fechainicio').value = fechainicio;

document.getElementById('fechafinal').value = fechafinal;

var boton = document.getElementById('boton');

boton.innerHTML = 'Editar';



boton.onclick = function(){

    

var washingtonRef = db.collection("users").doc(id);





var apellido = document.getElementById('apellido').value;

var fecha = document.getElementById('fecha').value;

var productoid = document.getElementById('productoid').value;

var asociadoid = document.getElementById('asociadoid').value;

var fechainicio = document.getElementById('fechainicio').value;

var fechafinal = document.getElementById('fechafinal').value;






// Set the "capital" field of the city 'DC'

return washingtonRef.update({



    Descripcion: apellido,

    clienteID: fecha,

    productoID: productoid,

    asociadoID: asociadoid,

    fechaInicio: fechainicio,

    fechaFinal: fechafinal


})

.then(function() {

    console.log("Document successfully updated!");

    boton.innerHTML = 'Guardar';



    document.getElementById('apellido').value = '';

    document.getElementById('fecha').value = '';

    document.getElementById('productoid').value = '';

    document.getElementById('asociadoid').value = '';

    document.getElementById('fechainicio').value = '';

    document.getElementById('fechafinal').value = '';

})

.catch(function(error) {

    // The document probably doesn't exist.

    console.error("Error updating document: ", error);

});

}

}


