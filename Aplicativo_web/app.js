const sequelize = require("./database/dbconfig");
const server = require("./server");

async function run() {

    const port = 8080;

    try {

        Usuario.hasMany(Atendimento, { 
            foreignKey: "usuarioId",
            as: "atendimentos",
            })

        Atendimento.belongsTo(Usuario, {
            foreignKey: "usuarioId",
            as: "usuario"
        })

        await sequelize.authenticate();
        console.log('👍 Conexão com o banco realizada com sucesso.');
       
        await sequelize.sync();
        console.log('👍 Modelos sincronizados.');
   
        server.port = port;
        server.listen();

    } catch (error) {
        console.error('❌ Erro ao iniciar a aplicação:', error);
    }
}

run();