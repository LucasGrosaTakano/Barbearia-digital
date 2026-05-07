const Usuario = require("../Models/UsuarioModel")
const UsuariosSchema = require("../schemas/UsuarioSchema")

class UsuarioService
{
    #usuarioSchema

    constructor()
    {
        this.#usuarioSchema = UsuariosSchema
    
    }
    async buscarUsuario(id)
    {
        return await this.#usuarioSchema.findAll({where: {id : id}})
    }
}

module.exports = UsuarioService()