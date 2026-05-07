class AtendimentoModel
{
    nomeCliente
    telefone
    horarioAtendimento
    dataAtendimento    
    dataNascimento
    tipoServico
    profissional

    constructor(nomeCliente, telefone, horarioAtendimento, dataAtendimento, dataNascimento, tipoServico, profissional)
    {
        this.nomeCliente = nomeCliente
        this.telefone = telefone
        this.horarioAtendimento = horarioAtendimento
        this.dataAtendimento = dataAtendimento
        this.tipoServico = tipoServico
        this.dataNascimento = dataNascimento
        this.profissional = profissional
    }
}

module.exports = Registrar