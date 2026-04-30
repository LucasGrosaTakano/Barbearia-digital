
class UsuarioControler
{
    index(req, res)
    {
        res.render("Usuario/UsuarioView")
    }

}

module.exports = new UsuarioControler()