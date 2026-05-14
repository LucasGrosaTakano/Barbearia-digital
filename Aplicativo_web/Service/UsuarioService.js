const Usuario = require("../mvc/models/UsuarioModel")
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
        return await this.#usuarioSchema.findOne({where: {id : id}})
    }

async cadastrarUsuario(username, email, senha)
{
    const usuario = new Usuario(email,senha,username)

    const id = await this.#usuarioSchema.create
    (
        {
            username: usuario.nome,
            email: usuario.email,
            password: usuario.senha

        }
    )

    return id
}

async atualizarUsuario(username, email, senha)
{

    let rows = 0;

    const usuario = await this.#usuarioSchema.findByPk(id)

    if(usuario)
    {
        const model = new Usuario(
            username || usuario.username, 
            email || usuario.email,
            senha || usuario.password
        )
      //////////////////////////


    const affectedRows = await this.#usuarioSchema.update
    (
        {
            username: usuario.nome,
            email: usuario.email,
            password: usuario.senha

        },
        {
            where: 
            {
                id : id
            }
        }

    )
    rows = affectedRows
    
    }

    return rows
}


}

module.exports = UsuarioService