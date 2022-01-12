const Producto = require("./producto.js");

const Contenedor = require("./contenedor.js");

let prod1 = new Producto.Producto(
    "guaymallen",
    "150",
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSk9ec2r_jLAjbkz8bkjBP7F4cheQmcL_weLxqO3u5a3fqiv3W89ylbN0uc5Ekhb5utilzQezjSgw&usqp=CAc"
);
let prod2 = new Producto.Producto(
    "terrabusi",
    "120",
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6czZDCLjcESCLMsbAO3uG6bd131qFyldmMs088xTrKnV-vxtrM0pYbT4vq9BSDedK75EMP5T_28jlTg&usqp=CAc"
);
let prod3 = new Producto.Producto(
    "aguila",
    "100",
    "https://http2.mlstatic.com/D_NQ_NP_897823-MLA44651065774_012021-O.webp"
);
let prod4 = new Producto.Producto(
    "Milka",
    "200",
    "https://http2.mlstatic.com/D_NQ_NP_684927-MLA47778216543_102021-O.webp"
);

let contenedor1 = new Contenedor.Contenedor("productos.txt");

//--------------------------------------

async function LanzarMetodos(prod) {
    console.log(await contenedor1.save(prod));
    console.log(await contenedor1.getById(2));
    console.log(await contenedor1.getById(200));
    console.log(await contenedor1.getAll());
    // console.log(await contenedor1.deleteById(1));

    // async function BuscarPorID (id) {
    // }

    // async function mostrarTodos () {
    // }

    // async function deleteById (id) {
    // }

    // async function deleteAll () {
    // }

    // guardar(obj2)
    // .then(resultado => console.log(resultado))
    //     .then(BuscarPorID(2)
    //         .then(resultado => console.log(resultado)))
    //             .then(BuscarPorID(200)
    //                 .then(resultado => console.log(resultado)))
    //                     .then(mostrarTodos()
    //                         .then(resultado => console.log(resultado)))
    //                             .then(deleteById(1)
    //                                 .then(resultado => console.log(resultado)))

    // .catch(err => console.error(err));
}

LanzarMetodos([prod2, prod1, prod3, prod4]);