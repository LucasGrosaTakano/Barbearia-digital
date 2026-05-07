const {DataTypes, Model} = require('sequelize')
const sequelize = require('../database/dbconfig')

class Registrar extends Model {}


Registrar.init({
    nomeCliente: 
    {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: 
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    horarioAtendimento: 
    {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },  
    dataAtendimento: 
    {
        type: DataTypes.TIME,
        allowNull: false,
    },  
    dataNascimento: 
    {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }, 
    tipoServico: 
    {
        // inserir opções para tipos de serviços : Cabelo, Barba, Sonbrancelha.
        type: DataTypes.ENUM('Cabelo', 'Barba', 'Sobrancelha', 'Outros'),
        allowNull: false,
    },
    profissional: 
    {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
  
    },{
        sequelize,
        modelName: 'Atendimento',
        tableName: 'atendimento',
    });

    module.exports = Registrar
