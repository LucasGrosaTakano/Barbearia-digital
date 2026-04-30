const express = require('express');
class Server
{
    app 
    port

    constructor(port)
    {
        this.app = express()
        this.port = port
    }
    listen()
    {
        this.app.listen(this.port, () => {
            console.log("Servidor Online..." , this.port)
        })
    }

}

module.exports = new Server(3000)