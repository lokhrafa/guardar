firebase.initializeApp({

    apiKey:"AIzaSyA__1_LpdqvP1rc17NrXyOhls7XJqtVjg8",

    authDomain: "igproyecto-a5fb1.firebaseapp.com",

    projectId: "igproyecto-a5fb1"

  });



var db = firebase.firestore();


function guardar(){

   

    

    var apellido = document.getElementById('apellido').value;

    var fecha = document.getElementById('fecha').value;

    var productoid = document.getElementById('productoid').value;

    var asociadoid = document.getElementById('asociadoid').value;

    var fechainicio = document.getElementById('fechainicio').value;

    var fechafinal = document.getElementById('fechafinal').value;





    db.collection("cortes").add({

       

        Numcorte: apellido,

        ProyectoID: fecha,

        FechaDePago: productoid,

        Estatus: asociadoid,

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

db.collection("cortes").onSnapshot((querySnapshot) => {

    tabla.innerHTML = '';

    querySnapshot.forEach((doc) => {

        console.log(`${doc.id} => ${doc.data().Numcorte}`);

        tabla.innerHTML += `  
        <tr>
     
        <td>${doc.data().Numcorte}</td>
        <td>${doc.data().ProyectoID}</td>
        <td> ${doc.data().FechaDePago}</td>
        <td> ${doc.data().Estatus}</td>
        <td> ${doc.data().fechaInicio}</td>
        <td> ${doc.data().fechaFinal}</td>
        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
        <td> <button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().Numcorte}','${doc.data().ProyectoID}','${doc.data().FechaDePago}','${doc.data().Estatus}','${doc.data().fechaInicio}','${doc.data().fechaFinal}')">Editar</button></td>
      </tr>`
      

  

    });

});







function eliminar(id){

    

    db.collection("cortes").doc(id).delete().then(function() {

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

    

var washingtonRef = db.collection("cortes").doc(id);





var apellido = document.getElementById('apellido').value;

var fecha = document.getElementById('fecha').value;

var productoid = document.getElementById('productoid').value;

var asociadoid = document.getElementById('asociadoid').value;

var fechainicio = document.getElementById('fechainicio').value;

var fechafinal = document.getElementById('fechafinal').value;






// Set the "capital" field of the city 'DC'

return washingtonRef.update({


    Numcorte: apellido,

    ProyectoID: fecha,

    FechaDePago: productoid,

    Estatus: asociadoid,

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