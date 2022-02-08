module.exports = class producto {
    static contenedorProductos = [{
            id: 1,
            title: "guaymallen",
            price: 150,
            thumbnail: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSk9ec2r_jLAjbkz8bkjBP7F4cheQmcL_weLxqO3u5a3fqiv3W89ylbN0uc5Ekhb5utilzQezjSgw&usqp=CAc",
        },
        {
            id: 2,
            title: "aguila",
            price: 100,
            thumbnail: "https://http2.mlstatic.com/D_NQ_NP_897823-MLA44651065774_012021-O.webp",
        },
        {
            id: 3,
            title: "Milka",
            price: 200,
            thumbnail: "https://http2.mlstatic.com/D_NQ_NP_684927-MLA47778216543_102021-O.webp",
        },
    ];


    getMaxId() {
        return producto.contenedorProductos.length === 0 ?
            0 :
            producto.contenedorProductos.reduce(
                (acum, proximo) => (acum > proximo.id ? acum : proximo.id),
                0
            );
    }

    getProductos() {
        return producto.contenedorProductos.length === 0 ?
            null :
            producto.contenedorProductos;
    }

    getProductoById(idP) {
        return idP != undefined && typeof idP === "number" ?
            producto.contenedorProductos.find((producto) => producto.id === idP) :
            null;
    }

    setProducto(objP) {

        if (
            objP.title != undefined &&
            objP.price != undefined &&
            parseInt(objP.price) != NaN &&
            objP.thumbnail != undefined &&
            objP.thumbnail != ""
        ) {
            let id = this.getMaxId()
            id++;
            objP.id = id;

            let objPAgregado = {
                id: objP.id,
                title: objP.title,
                price: objP.price,
                thumbnail: objP.thumbnail,
            };
            producto.contenedorProductos.push(objPAgregado);
            return objPAgregado;
        } else {
            return null;
        }
    }

    updateProducto(idP, objP) {
        if (
            objP.title != undefined &&
            objP.thumbnail != undefined &&
            objP.thumbnail != "" &&
            objP.price != undefined &&
            parseInt(objP.price) != NaN &&
            idP != undefined &&
            typeof idP === "number"
        ) {
            let posicion = producto.contenedorProductos.findIndex(
                (producto) => producto.id === idP
            );
            if (posicion > -1) {
                producto.contenedorProductos.splice(posicion, 1);

                producto.contenedorProductos.push({
                    id: objP.id,
                    title: objP.title,
                    price: objP.price,
                    thumbnail: objP.thumbnail,
                });
                return true;
            }
        }
        return false;
    }

    deleteProducto(idP) {
        if (idP != undefined && typeof idP === "number") {
            let posicion = producto.contenedorProductos.findIndex(
                (element) => element.id === idP
            );

            if (posicion > -1) {
                producto.contenedorProductos.splice(posicion, 1);
                return true;
            }
        }
        return false;
    }
};