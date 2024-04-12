//*Cuando no usamos el atributo onClick de html

/* let boton = document.querySelector(`button`);

boton.addEventListener("click",()=>{
    getPost()
})*/

//TODO DEFINIR GETPOST

const getPost = async () => {

    //Buscar la informacion en la api
    let url = `https://jsonplaceholder.typicode.com/posts`

    let response = await fetch(url);

    let data response = await response.json();

    console.log(data);

    //recorrer el arreglo del data
    let nuevoArreglo = data.map((objeto) => {
        return `<ul>
        <li>
        <strong>${objeto.title}</strong>
        <span><br>${objeto.body}</span>
        </li>
        </ul>`
    })

    //mostrarlo en el dom
    document.getElementById("post-data").innerHTML = nuevoArreglo.join("");










}


