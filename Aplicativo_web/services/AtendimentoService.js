const Atendimento = require("../mvc/models/AtendimentoModel");
const AtendimentoSchema = require("../schemas/AtendimentoSchema");
const UsuarioSchema = require("../schemas/UsuarioSchema");

class AtendimentoService {
    #atendimentoSchema;

    constructor() {
        this.#atendimentoSchema = AtendimentoSchema;
    }

    async buscarAtendimento(id) {
        const dado = await this.#atendimentoSchema.findOne({ where: { id: id } });

        if (!dado) {
            return null;
        }

        const atendimento = new Atendimento(
            dado.nomeCliente,
            dado.telefone,
            dado.horarioAtendimento,
            dado.dataAtendimento,
            dado.tipoServico,
            dado.profissional
        );

        atendimento.id = dado.id;

        return atendimento;
    }

    async deletarAtendimento(id) {
        const atendimento = await this.#atendimentoSchema.findOne({ where: { id: id } });

        if (!atendimento) {
            throw new Error("Atendimento não encontrado.");
        }

        const affectedRows = await atendimento.destroy();
        return affectedRows;
    }

    async buscarTodosAtendimentos() {
        const atendimentos = [];
        const dados = await this.#atendimentoSchema.findAll();

        for (const dado of dados) {
            const atendimento = new Atendimento(
                dado.nomeCliente,
                dado.telefone,
                dado.horarioAtendimento,
                dado.dataAtendimento,
                dado.tipoServico,
                dado.profissional
            );

            atendimento.id = dado.id;
            atendimentos.push(atendimento);
        }

        return atendimentos;
    }

    async cadastrarAtendimento(nomeCliente, telefone, horarioAtendimento, dataAtendimento, tipoServico, profissional) {
        const atendimento = new Atendimento(
            nomeCliente,
            telefone,
            horarioAtendimento,
            dataAtendimento,
            tipoServico,
            profissional
        );

        const novoAtendimento = await this.#atendimentoSchema.create({
            nomeCliente: atendimento.nomeCliente,
            telefone: atendimento.telefone,
            horarioAtendimento: atendimento.horarioAtendimento,
            dataAtendimento: atendimento.dataAtendimento,
            tipoServico: atendimento.tipoServico,
            profissional: atendimento.profissional,
        });

        return novoAtendimento;
    }

    async atualizarAtendimento(id, nomeCliente, telefone, horarioAtendimento, dataAtendimento, tipoServico, profissional) {
        const atendimento = await this.buscarAtendimento(id);

        if (!atendimento) {
            throw new Error("Atendimento não encontrado.");
        }

        const updatedAtendimento = {
            nomeCliente: nomeCliente || atendimento.nomeCliente,
            telefone: telefone || atendimento.telefone,
            horarioAtendimento: horarioAtendimento || atendimento.horarioAtendimento,
            dataAtendimento: dataAtendimento || atendimento.dataAtendimento,
            tipoServico: tipoServico || atendimento.tipoServico,
            profissional: profissional || atendimento.profissional,
        };

        const affectedRows = await this.#atendimentoSchema.update(updatedAtendimento, { where: { id: id } });
        return affectedRows;
    }
}

module.exports = AtendimentoService;