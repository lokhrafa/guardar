function registrar(){

    var email = document.getElementById('email').value;

    var contrasena = document.getElementById('contrasena').value;

   



    firebase.auth().createUserWithEmailAndPassword(email, contrasena)

    .then(function(){

        verificar()

    })

    .catch(function(error) {

        // Handle Errors here.

        var errorCode = error.code;

        var errorMessage = error.message;

        console.log(errorCode);

        console.log(errorMessage);

        // ...



      });

}



function ingreso(){

    var email2 = document.getElementById('email2').value;

    var contrasena2 = document.getElementById('contrasena2').value;



    


    firebase.auth().signInWithEmailAndPassword(email2, contrasena2).catch(function(error) {

        // Handle Errors here.

        var errorCode = error.code;

        var errorMessage = error.message;

        console.log(errorCode);

        console.log(errorMessage);

        // ....
        if(errorMessage){

            alert("¡USER OR PASSWORD INCORRECT!");
        } else {
         
            alert("Bienvenido");
          }

    
      });


  


}





function observador(){

    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {

            console.log('existe usuario activo')

            aparece(user);

          // User is signed in.

          var displayName = user.displayName;

          var email = user.email;

          var name = user.name;



          console.log('******');

          console.log(user.emailVerified);

          console.log('*******');





          var emailVerified = user.emailVerified;

          var photoURL = user.photoURL;
0
          var isAnonymous = user.isAnonymous;

          var uid = user.uid;

          var providerData = user.providerData;

          // ...

        } else {

          // User is signed out.

          console.log('no existe usuario activo')

          // ...

          contenidoentry.innerHTML = `
          <div class="alert alert-primary" role="alert">
        sesion inactiva..
</div>
          `;

        }

      });

}

observador();




function aparece(user)

{  

    var user = user;

    var contenidoentry = document.getElementById('contenidoentry');
 

    

    if(user.emailVerified){

        contenidoentry.innerHTML=`<div id="wrapper">
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <nav id="spy">
                <ul class="sidebar-nav nav">
                    <li class="sidebar-brand">
                        <a href="#home"><span class="fa fa-home solo">Home</span></a>
                    </li>
                    <li>
                    <a href="entradmin.html" data-scroll>
                        <span class="">Administrador</span>
                    </a>
                </li>
                    <li>
                    <a href="corte.html" data-scroll>
                    <span class="">Cortes</span>
                </a>
                </li>
                <li>
                <a href="facturasdeventas.html" data-scroll>
                    <span class="">Facturas de ventas</span>
                </a>
                
              </li>
              <li>
              <a href="pagodefacturasdeventas.html" data-scroll>
                  <span class="">Pago de facturas</span>
              </a>
              
            </li>
        
            <li>
            <a href="facturadegastos.html" data-scroll>
            <span class="">Factura de gastos</span>
        </a>
        <li>
        <a href="listadefacturas.html" data-scroll>
            <span class="">Lista de Facturas</span>
        </a>
        
      </li>
        
      </li>

                    <li>
                        <a href="#anch4" data-scroll>
                        <button onclick="cerrar()" class="btn btn-danger">Cerrar sesion </button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <div id="page-content-wrapper">
        <div class="content-header">
            <h1 id="home">
                <a id="menu-toggle" href="#" class="glyphicon glyphicon-align-justify btn-menu toggle">
                    <i class="fa fa-bars"></i>
                </a>
                Sidebar Navigation Template
            </h1>
        </div>
        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row">

                    <div class="jumbotron" style="background:transparent !important"  >
                    <div class = "container mt-5">
                    <h4 class="alert-heading"> </h4>
    
    
    <img src="image/entra.png">
    </div>
   
    </div> 
                    
                    </div>

            </div>
        
        
        
        `;


      
  
    }
  
    
}


function cerrar(){

    firebase.auth().signOut()

    .then(function(){

        console.log('Saliendo...')

    })

    .catch(function(error){

        console.log(error)

    })

}



function verificar(){

    var user = firebase.auth().currentUser;



user.sendEmailVerification().then(function() {

    console.log('Enviando correo...');

  // Email sent.

}).catch(function(error) {

  // An error happened.

  console.log(error);

});

}



  




