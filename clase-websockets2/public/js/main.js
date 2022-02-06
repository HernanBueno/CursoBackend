const socket = io.connect();

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();


    socket.emit("new_message", {
        author: document.querySelector("input[name=author]").value,
        message: document.querySelector("input[name=message]").value,
    })
    console.log("enviar mensaje al WS");

});

const renderhbs = (messages) => {
    const tplHtml = document.querySelector('#mensajestpl').innerHTML;
    const template = Handlebars.compile(tplHtml);
    document.querySelector("#mensajes").innerHTML = template({ messages })
}

/*const render = (data) => {
    const html = data.map((e) => {
        return `<div> 
        <strong> ${e.author}</strong>
        <em> ${e.message}</em>
        </div>`;
    }).join(" ");
    document.querySelector("#mensajes").innerHTML = html;
};*/

socket.on("messages_received", data => {
    renderhbs(data)
})