import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '../../../classes/controle/ControleLivro';

export const controleLivro = new ControleLivro();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const livros = await controleLivro.obterLivros();
            res.status(200).json(livros);
        } else if (req.method === 'POST') {
            const novoLivro = req.body;
            await controleLivro.incluir(novoLivro);
            res.status(200).json({ message: 'Livro incluído com sucesso' });
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
};