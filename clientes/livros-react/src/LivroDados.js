import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from './controle/ControleLivro';
import ControleEditora, { editoras } from './controle/ControleEditora';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora(editoras);

const LivroDados = () => {
    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const navigate = useNavigate();

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event: React.FormEvent) => {
        event.preventDefault();

        const livro = {
            codigo: "",
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n'),
            codEditora: codEditora
        };

        controleLivro.incluir(livro).then(() => {
            navigate('/');
        });
    };

    return (
        <main className="container mt-4">
            <h1 className="mb-4">Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Resumo</label>
                    <textarea 
                        className="form-control" 
                        value={resumo} 
                        onChange={(e) => setResumo(e.target.value)} 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Autores (um por linha)</label>
                    <textarea 
                        className="form-control" 
                        value={autores} 
                        onChange={(e) => setAutores(e.target.value)} 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Editora</label>
                    <select 
                        className="form-select" 
                        value={codEditora} 
                        onChange={tratarCombo}
                    >
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">
                    Salvar Dados
                </button>
            </form>
        </main>
    );
};

export default LivroDados;