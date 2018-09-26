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

    var moneda = document.getElementById('moneda').value;

    var tasa = document.getElementById('tasa').value;

    var observaciones = document.getElementById('observaciones').value;





    db.collection("facturasdeventas").add({

       

        FacturaID: apellido,

        ProyectoID: fecha,

        Numfactura: productoid,

       Numcorte: asociadoid,

       FechaDeFactura: fechainicio,

        Monto: fechafinal,

        Moneda: moneda,

        Tasa: tasa,

        Observaciones: observaciones




    })

    .then(function(docRef) {

        console.log("Document written with ID: ", docRef.id);

     

        document.getElementById('apellido').value = '';

        document.getElementById('fecha').value = '';

        document.getElementById('productoid').value = '';

        document.getElementById('asociadoid').value = '';

        document.getElementById('fechainicio').value = '';

        document.getElementById('fechafinal').value = '';

        document.getElementById('moneda').value = '';

        document.getElementById('tasa').value = '';

        document.getElementById('observaciones').value = '';





    })

    .catch(function(error) {

        console.error("Error adding document: ", error);

    });

    

}

var tabla = document.getElementById('tabla');

db.collection("facturasdeventas").onSnapshot((querySnapshot) => {

    tabla.innerHTML = '';

    querySnapshot.forEach((doc) => {

        console.log(`${doc.id} => ${doc.data().FacturaID}`);

        tabla.innerHTML += `  
        <tr>
     
        <td>${doc.data().FacturaID}</td>
        <td>${doc.data().ProyectoID}</td>
        <td> ${doc.data().Numfactura}</td>
        <td> ${doc.data().Numcorte}</td>
        <td> ${doc.data().FechaDeFactura}</td>
        <td> ${doc.data().Monto}</td>
        <td> ${doc.data().Moneda}</td>
        <td> ${doc.data().Tasa}</td>
        <td> ${doc.data().Observaciones}</td>
        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
        <td> <button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().FacturaID}','${doc.data().ProyectoID}','${doc.data().Numfactura}','${doc.data().Numcorte}','${doc.data().FechaDeFactura}','${doc.data().Monto}', '${doc.data().Moneda}','${doc.data().Tasa}','${doc.data().Observaciones}')">Editar</button></td>
      </tr>`
      

  

    });

});







function eliminar(id){

    

    db.collection("facturasdeventas").doc(id).delete().then(function() {

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



function editar(id,nombre,apellido,fecha,productoid,asociadoid,fechainicio,fechafinal,moneda,tasa,observaciones){



document.getElementById('apellido').value = apellido;

document.getElementById('fecha').value = fecha;

document.getElementById('productoid').value = productoid;

document.getElementById('asociadoid').value = asociadoid;

document.getElementById('fechainicio').value = fechainicio;

document.getElementById('fechafinal').value = fechafinal;

document.getElementById('moneda').value = moneda;

document.getElementById('tasa').value = tasa;

document.getElementById('observaciones').value = observaciones



var boton = document.getElementById('boton');

boton.innerHTML = 'Editar';



boton.onclick = function(){

    

var washingtonRef = db.collection("facturasdeventas").doc(id);





var apellido = document.getElementById('apellido').value;

var fecha = document.getElementById('fecha').value;

var productoid = document.getElementById('productoid').value;

var asociadoid = document.getElementById('asociadoid').value;

var fechainicio = document.getElementById('fechainicio').value;

var fechafinal = document.getElementById('fechafinal').value;

var moneda = document.getElementById('moneda').value;

var tasa = document.getElementById('tasa').value;

var observaciones = document.getElementById('observaciones').value;







// Set the "capital" field of the city 'DC'

return washingtonRef.update({


    Numcorte: apellido,

    ProyectoID: fecha,

    FechaDePago: productoid,

    Estatus: asociadoid,

    fechaInicio: fechainicio,

    fechaFinal: fechafinal,

    Monto: fechafinal,

     Moneda: moneda,

    Tasa: tasa,

    Observaciones: observaciones

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

    document.getElementById('moneda').value = '';

        document.getElementById('tasa').value = '';

        document.getElementById('observaciones').value = '';

})

.catch(function(error) {

    // The document probably doesn't exist.

    console.error("Error updating document: ", error);

});

}

}