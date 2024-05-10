const express = require('express');
const fetch = require('node-fetch');

const app = express();

// Endpoint para lidar com solicitações GET
app.get('/api/dados', async (req, res) => {
    try {
        // Faz a solicitação à API do GitHub para obter os repositórios da organização "takenet"
        const response = await fetch('https://api.github.com/orgs/takenet/repos');

        // Verifica se a resposta da solicitação foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao obter repositórios da organização takenet');
        }

        // Extrai os dados JSON da resposta
        const repositories = await response.json();

        // Ordena os repositórios com base na data de criação
        const sortedRepositories = repositories.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        // Retorna os repositórios ordenados como resposta JSON
        res.json(sortedRepositories);
    } catch (error) {
        console.error('Erro:', error.message);
        res.status(500).json({ error: 'Erro ao obter repositórios' });
    }
});

// Define a porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
