// NovoProjeto.js
import React, { useState, useEffect } from 'react';
import Style from '../../Css/inicioFreelancer.module.css';
import Swal from 'sweetalert2';

const NovoProjeto = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [orcamento, setOrcamento] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [habilidades, setHabilidades] = useState([]);
    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);
    const [habilidadesSelecionadas, setHabilidadesSelecionadas] = useState([]);
    const [nivelExperiencia, setNivelExperiencia] = useState(1);

    // Fetch de categorias e habilidades
    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await fetch('https://jinni.onrender.com/v1/jinni/clientes');
                const data = await response.json();
                setCategorias(data.categorias || []);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };

        const fetchHabilidades = async () => {
            try {
                const response = await fetch('http://localhost:8080/v1/jinni/habilidades');
                const data = await response.json();
                setHabilidades(data.habilidades || []);
            } catch (error) {
                console.error('Erro ao buscar habilidades:', error);
            }
        };

        fetchCategorias();
        fetchHabilidades();
    }, []);

    // Lógica para enviar o projeto
    const handleSubmit = async () => {
        if (!nome || !descricao || !orcamento || categoriasSelecionadas.length === 0 || habilidadesSelecionadas.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Campos obrigatórios',
                text: 'Preencha todos os campos antes de enviar o projeto!',
            });
            return;
        }

        const projeto = {
            nome_projeto: nome,
            descricao_projeto: descricao,
            orcamento: parseFloat(orcamento),
            id_nivel_experiencia: nivelExperiencia,
            categoria: categoriasSelecionadas,
            habilidade: habilidadesSelecionadas,
        };

        try {
            const response = await fetch('http://localhost:8080/v1/jinni/projeto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(projeto),
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Projeto enviado!',
                    text: 'Seu projeto foi publicado com sucesso!',
                });
                // Limpar os campos após sucesso
                setNome('');
                setDescricao('');
                setOrcamento('');
                setCategoriasSelecionadas([]);
                setHabilidadesSelecionadas([]);
            } else {
                const error = await response.json();
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao enviar!',
                    text: error.message || 'Houve um problema ao enviar o projeto.',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro na conexão!',
                text: 'Não foi possível conectar ao servidor.',
            });
        }
    };

    // Função que exibe o SweetAlert
    const exibirNovoProjetoPopup = () => {
        Swal.fire({
            title: 'Novo Projeto',
            html: `
                <div>
                    <input type="text" id="nome" class="swal2-input" placeholder="Nome do Projeto">
                    <textarea id="descricao" class="swal2-textarea" placeholder="Descrição"></textarea>
                    <input type="number" id="orcamento" class="swal2-input" placeholder="Orçamento">
                </div>
            `,
            confirmButtonText: 'Enviar',
            showCancelButton: true,
            preConfirm: () => {
                const nome = Swal.getPopup().querySelector('#nome').value;
                const descricao = Swal.getPopup().querySelector('#descricao').value;
                const orcamento = Swal.getPopup().querySelector('#orcamento').value;
                if (!nome || !descricao || !orcamento) {
                    Swal.showValidationMessage('Preencha todos os campos!');
                }
                return { nome, descricao, orcamento };
            },
        }).then((result) => {
            if (result.isConfirmed) {
                setNome(result.value.nome);
                setDescricao(result.value.descricao);
                setOrcamento(result.value.orcamento);
                handleSubmit();
            }
        });
    };

    return { exibirNovoProjetoPopup };
};

export default NovoProjeto;
