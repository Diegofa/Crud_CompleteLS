const input_name = document.getElementById("nombre");
const input_apellido = document.getElementById("apellido");
const input_edad = document.getElementById("edad");
const input_email = document.getElementById("email");
const input_grado = document.getElementById("grado");
const input_telefono = document.getElementById("telefono");
const btn_Agregar = document.querySelector("#agregar");
const content_div = document.querySelector(".content");
const delete_button = document.querySelector(".deleteAll");

document.addEventListener("DOMContentLoaded", () => {
  // Obtener elementos del local Storage

  const estudiantes = JSON.parse(localStorage.getItem("estudiantes"));
  if (!estudiantes) {
    //Se está validando que es null
    const parrafo = document.createElement("p"); //Para crear elementos createElement
    const text_parrafo = document.createTextNode("No hay elementos"); //Para crear un texto
    parrafo.append(text_parrafo);
    content_div.append(parrafo);
  } else {
    for (let i = 0; i <= estudiantes.length; i++) {
      // Crear elemento div
      const div_estudiantes = document.createElement("div");
      const estudiantes_grado = document.createTextNode(
        `${estudiantes[i].nombre}-${estudiantes[i].apellido}`
      );

      // Crear boton eliminar
      const button_eliminar = document.createElement("button");
      const text_button_eliminar = document.createTextNode("Eliminar");
      button_eliminar.appendChild(text_button_eliminar);
      div_estudiantes.appendChild(button_eliminar);

      // Agregar textos y boton
      div_estudiantes.appendChild(estudiantes_grado);
      div_estudiantes.append(button_eliminar);

      content_div.appendChild(div_estudiantes);
    }
  }

  delete_button.addEventListener('click', () =>{
    localStorage.setItem("estudiantes", JSON.stringify([])); //Convirte un arreglo en string
    content_div.innerHTML = ''; // Limpiar el content Div
    const parrafo = document.createElement("p"); //Para crear elementos createElement
    const text_parrafo = document.createTextNode("No hay elementos"); //Para crear un texto
    parrafo.append(text_parrafo);
    content_div.append(parrafo);


  })
});
