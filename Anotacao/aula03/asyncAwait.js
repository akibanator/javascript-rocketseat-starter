const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK')}, 2000)
})

/*
// Promise tradicional
minhaPromise()
    .then(response => {
        console.log(response);
    })
    .catch(err => {

    });
*/

/*
async function executaPromise() {
    try {
        console.log(await minhaPromise());
    } catch (error) {
        console.log(error)
    }
}
*/

// Transformando a function await em arrowfunction
const executaPromise = async () => {
    console.log(await minhaPromise());
}

// Precisa instalar as funcoes async/await(ES8) no babel ES8
// yarn add @babel/plugin-transform-async-to-generator -D
/* Adicionar no .babelrc
{
    "presets": ["@babel/preset-env"],
    "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-async-to-generator"
    ]
}
*/

// Instalar também polyfill
// yarn add @babel/polyfill -D
// Adicionar entrada em webpack.config.js
//     entry: ['@babel/polyfill', './src/main.js'],

executaPromise();