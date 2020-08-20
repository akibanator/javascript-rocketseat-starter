/*
Exercícios: Módulo 03
Todos os exercícios abaixo necessitam que você esteja com o plugin do Async / Await do Babel e o
babel - polyfill devidamente configurados.Em alguns exercícios é necessário instalar o Axios.
    Exercício
Transforme os seguintes trechos de código utilizando async / await:
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
umPorSegundo();
*/

/*
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    try {
        await delay();
        console.log('1s')
        await delay();
        console.log('2s')
        await delay();
        console.log('3s')
    } catch (error) {
        console.log('Algo deu errado')
    }
}

umPorSegundo();
*/

import axios from 'axios';
/*
function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}
*/

/*
const getUserFromGithub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data)
    } catch (error) {
        console.log('Erro na requisição')
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g12321312');
*/

/*
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            })
    }
}
*/

/*
class Github {
    static async getRepositories(repo) {
        try {
            const resp = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(resp.data)
        } catch (error) {
            console.log('Erro na requisição')
        }
    }
}

Github.getRepositories('akibanator/Android-Projects');
Github.getRepositories('akibanator/CaelumCourseFj-11');
*/

/*
const buscaUsuario = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
}
*/

const buscaUsuario = async (user) => {
    try {
        const resp = await axios.get(`https://api.github.com/users/${user}`)
        console.log(resp.data)
    } catch (error) {
        console.log('Erro requisição')
    }
}

buscaUsuario('diego3g');

