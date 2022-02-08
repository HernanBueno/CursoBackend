const sockets = io(); //utilizo sockets del lado del cliente

document.querySelector('#formularioProd').addEventListener('submit', async(e) => {
    e.preventDefault();
    await fetch('/productos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: document.querySelector('#formularioProd input[name=title]').value,
            price: document.querySelector('#formularioProd input[name=price]').value,
            thumbnail: document.querySelector('#formularioProd input[name=thumbnail]').value,
        })
    })
})

//esciucho con el socket la respuesta del servidor
sockets.on("update_products", async(data) => {
    mostrarProductos(data);
})

async function mostrarProductos(data) {
    const fetchtemplatehbs = await fetch('/templates/listProducts.hbs')
    const templatehbs = await fetchtemplatehbs.text();
    const template = Handlebars.compile(templatehbs)
    const html = template({ products: data })
    document.querySelector('#productos').innerHTML = html;
}