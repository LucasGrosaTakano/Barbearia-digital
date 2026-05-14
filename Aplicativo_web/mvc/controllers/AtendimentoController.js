const AtendimentoService = require("../../services/AtendimentoService");
const UsuarioService = require("../../services/UsuarioService");

class AtendimentoController {
    constructor() {
        this.atendimentoService = new AtendimentoService();
        this.usuarioService = new UsuarioService();
    }

    async index(req, res) {
        try {
            const atendimentos = await this.atendimentoService.buscarTodosAtendimentos();
            res.render("Atendimento/ListView", { atendimentos });
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar atendimentos.", error: error.message });
        }
    }

    async atendimentoCreateView(req, res) {
        const usuarios = await this.usuarioService.buscarTodosUsuarios();
        res.render("Atendimento/CreateView", { usuarios });
        
    }

    async atendimentoPostAsync(req, res) {
        try {
            const atendimento = await this.atendimentoService.cadastrarAtendimento(
                req.body.nomeCliente,
                req.body.telefone,
                req.body.horarioAtendimento,
                req.body.dataAtendimento,
                req.body.tipoServico,
                req.body.profissional
            );
            res.status(201).json({ message: "Atendimento cadastrado com sucesso!", atendimento });
        } catch (error) {
            res.status(400).json({ message: "Erro ao cadastrar atendimento.", error: error.message });
        }
    }

    async atendimentoEditView(req, res) {
        try {
            const atendimento = await this.atendimentoService.buscarAtendimento(req.params.id);
            if (!atendimento) {
                return res.status(404).json({ message: "Atendimento não encontrado." });
            }
            res.render("Atendimento/EditView", { atendimento });
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar atendimento.", error: error.message });
        }
    }

    async atendimentoPutAsync(req, res) {
        try {
            const affectedRows = await this.atendimentoService.atualizarAtendimento(
                req.params.id,
                req.body.nomeCliente,
                req.body.telefone,
                req.body.horarioAtendimento,
                req.body.dataAtendimento,
                req.body.tipoServico,
                req.body.profissional
            );
            res.json({ message: "Atendimento atualizado com sucesso!", affectedRows });
        } catch (error) {
            res.status(400).json({ message: "Erro ao atualizar atendimento.", error: error.message });
        }
    }

    async atendimentoDeleteAsync(req, res) {
        try {
            const affectedRows = await this.atendimentoService.deletarAtendimento(req.params.id);
            res.json({ message: "Atendimento excluído com sucesso!", affectedRows });
        } catch (error) {
            res.status(400).json({ message: "Erro ao excluir atendimento.", error: error.message });
        }
    }
}

module.exports = new AtendimentoController();