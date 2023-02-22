const input_name = document.getElementById("nombre");
const input_apellido = document.getElementById("apellido");
const input_edad = document.getElementById("edad");
const input_email = document.getElementById("email");
const input_grado = document.getElementById("grado");
const input_telefono = document.getElementById("telefono");
const btn_Agregar = document.querySelector("#agregar");
const content_div = document.querySelector(".content");
const delete_button = document.getElementById("delete-btn");

document.addEventListener("DOMContentLoaded", () => {
  // Obtener elementos del local Storage

  const Estudiantes = JSON.parse(localStorage.getItem("Estudiantes"));
  if (!Estudiantes) {
    //Se está validando que es null
    const parrafo = document.createElement("p"); //Para crear elementos createElement
    const text_parrafo = document.createTextNode("No hay elementos"); //Para crear un texto
    parrafo.append(text_parrafo);
    content_div.append(parrafo);
  } else {
    for (let i = 0; i < Estudiantes.length; i++) {
      // Crear elemento div
      const div_estudiantes = document.createElement("div");
      const estudiantes_grado = document.createTextNode(
        `${Estudiantes[i].nombre}-${Estudiantes[i].apellido}`
      );

      // Crear boton eliminar
      const button_eliminar = document.createElement("button");
      const text_button_eliminar = document.createTextNode("Eliminar");
      button_eliminar.appendChild(text_button_eliminar);
      div_estudiantes.appendChild(button_eliminar);

      // Se agrega la función de eliminar del botón
      button_eliminar.onclick = () => {
        elimiarLocalST(i, Estudiantes);
      };

      // Agregar textos y boton
      div_estudiantes.appendChild(estudiantes_grado);
      div_estudiantes.append(button_eliminar);

      content_div.appendChild(div_estudiantes);
    }
  }

  // Add button --> Boton de agregar registros
  btn_Agregar.addEventListener("click", (e) => {
    e.preventDefault(); // Como los inputs están dentro de un formulario evita la acción submit que recarga la página de manera forzada
    // variable que guarda los datos capturados en local storage
    const Estudiantes = JSON.parse(localStorage.getItem("Estudiantes")) || []; // Valida que si no hay nada en el JSON null or false locombierte en un array vacio

    const estName = input_name.value; // Para acceder al valor de un input se coloca .value
    const estLastName = input_apellido.value;
    const estAge = input_edad.value;
    const estMail = input_email.value;
    const estGrado = input_grado.value;
    const estTel = input_telefono.value;

    const Estudiante = {
      // Seguardan los datos capturados en los imput en un objeto JSON
      // Key    :  Value
      "Nombre": estName,
      "Apellido": estLastName,
      "Edad": estAge,
      "Correo": estMail,
      "Grado": estGrado,
      "Telefono": estTel,
    };
    console.log(Estudiante);
    Estudiantes.push(Estudiante);
    console.log(Estudiantes);
    localStorage.setItem('Estudiantes', JSON.stringify(Estudiantes)); //setItem si existe lo actualiza si no existe lo crea
    localStorage.clear(); //    Limpia el contenedor

    for (let i = 0; i < Estudiantes.length; i++) {
      // Llena el contenedor con la iteración
      // Crear elemento div
      const div_estudiantes = document.createElement("div");
      const estudiantes_grado = document.createTextNode(
        `${Estudiantes[i].Nombre} ${Estudiantes[i].Apellido} ${Estudiantes[i].Edad} ${Estudiantes[i].Correo} ${Estudiantes[i].Telefono}`
      );

      // Crear boton eliminar
      const button_eliminar = document.createElement("button");
      const text_button_eliminar = document.createTextNode("Eliminar");
      button_eliminar.appendChild(text_button_eliminar);
      div_estudiantes.appendChild(button_eliminar);

      // Se agrega la función de eliminar del botón
      button_eliminar.onclick = () => {
        elimiarLocalST(i, Estudiantes);
      };

      // Agregar textos y boton
      div_estudiantes.appendChild(estudiantes_grado);
      div_estudiantes.append(button_eliminar);

      content_div.appendChild(div_estudiantes);
    }
  });

  // delete all button --> Elimina todos los registros que se encuentran en el content Div
  delete_button.addEventListener("click", () => {
    localStorage.clear(); // Borrar todos los datos del localStorage
    content_div.innerHTML = ""; // Limpiar el content Div
    const parrafo = document.createElement("p");
    const text_parrafo = document.createTextNode("No hay elementos");
    parrafo.append(text_parrafo);
    content_div.append(parrafo);
  });

  //Función de eliminar registros del LocalStorage
  //--> Sepuede usar splice, filter,
  function elimiarLocalST(i, Estudiantes) {
    Estudiantes.splice(i, 1);
    localStorage.clear();
    localStorage.setItem("Estudiantes", JSON.stringify(Estudiantes));
    for (let i = 0; i < Estudiantes.length; i++) {
      // Llena el contenedor con la iteración
      // Crear elemento div
      const div_estudiantes = document.createElement("div");
      const estudiantes_grado = document.createTextNode(
        `${Estudiantes[i].Nombre} ${Estudiantes[i].Apellido} ${Estudiantes[i].Edad} ${Estudiantes[i].Correo} ${Estudiantes[i].Telefono}`
      );

      // Crear boton eliminar
      const button_eliminar = document.createElement("button");
      const text_button_eliminar = document.createTextNode("Eliminar");
      button_eliminar.appendChild(text_button_eliminar);
      div_estudiantes.appendChild(button_eliminar);

      // Se agrega la función de eliminar del botón
      button_eliminar.onclick = () => {
        elimiarLocalST(i, Estudiantes);
      };

      // Agregar textos y boton
      div_estudiantes.appendChild(estudiantes_grado);
      div_estudiantes.append(button_eliminar);

      content_div.appendChild(div_estudiantes);
    }
  }
});
