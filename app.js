// JAVASCRIPT FORMULARIOS

// Expreciones regulares : para hacer coincidir combinaciones de caracteres de cadenas

// tienen patron / banderita

//const regExp = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

//const regExpObjeto = new RegExp("blu@uweb", "i") //notacion de objeto

// Entonces como se puede evaluar una cadena de string, para eso tenemos los metodos (exec, test, match, etc...)
// Entonces co n test() ponemos evaluar  si lo que nosotros escribimos es una exprecion regular.

//console.log(regExp.test("abelardo.ingles@gmail.com")) //si la encuentra devuelve verdadero, sino, falso.

//  Caracteres especiales

// VALIDACION DE FORMULARIOS ( de contacto en el lado del cliente, es una ayuda para el usuario,
//para q mande los datos correctanete escrito y no sea un payaso XD, del lado del servidor con node js )

//Validacion de datos incorporada: es con html a traves de atributos (recuired, minglenght, min, max, patern. etc...)

// Validacion a traves de javascript

// const formulario = document.querySelector("#formulario");
// const userName = document.querySelector("input[name='userName']");
// const userEmail = document.querySelector("input[name='userEmail']");

const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const alertSuccess = document.getElementById("alertSuccess");
const alertEmail = document.getElementById("alertEmail");
const alertName = document.getElementById("alertName");


const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none")
    alertSuccess.textContent ="Mensaje enviado con exito"
}

const pintarMensajeError = (errores) => {
    errores.forEach(item => {
        item.tipo.classList.remove("d-none")   
        item.tipo.textContent = item.msg
        

    });
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    alertSuccess.classList.add("d.none")

    const errores = []

    //esto devuelve true si existe solo espacios
    // console.log(!userName.value.trim())
    

    
    if (!regUserName.test(userName.value) ||!userName.value.trim()) {
        userName.classList.add("is-invalid")
        errores.push({
            tipo: alertName,
            msg: "Formato no valido en el campo nombre, solo letras"
        })
    }else {
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        alertName.classList.add("d-none")
    }

    if (!regUserEmail.test(userEmail.value)||!userEmail.value.trim()) {
        userEmail.classList.add("is-invalid")
        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo valido"
        })
    }else {
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
        alertEmail.classList.add("d-none")
    }

    if(errores.length !== 0){
        pintarMensajeError(errores)
        return
    }

    console.log("formulario enviado");
    pintarMensajeExito()


});