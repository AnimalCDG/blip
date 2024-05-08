import fetch from 'node-fetch';

async function getRepositories() {
    try {
        const response = await fetch('https://api.github.com/orgs/takenet/repos');

        if (!response.ok) {
            throw new Error('Erro ao obter repositórios da organização takenet');
        }

        const repositories = await response.json();

        const sortedRepositories = repositories.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        return sortedRepositories;
    } catch (error) {
        console.error('Erro:', error.message);
        return null;
    }
}

getRepositories()
    .then(repositories => {
        if (repositories) {
            console.log('Repositórios ordenados:', repositories);
        } else {
            console.log('Não foi possível obter os repositórios.');
        }
    })
    .catch(error => console.error('Erro:', error.message));
