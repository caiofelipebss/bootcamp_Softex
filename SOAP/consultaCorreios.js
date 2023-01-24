const {consultarCep} = require('correios-brasil');
const cep = '53433480';
consultarCep(cep).then(response => {
    console.log(response);
});

// Consultando apenas um dado
consultarCep(cep).then(response => {
    console.log("Apenas um dado: ");
    console.log(response.bairro);
})

//Rastrear encomendas
const {rastrearEncomendas} = require('correios-brasil');
let codRastreio = ['LE504271395SE'];
rastrearEncomendas(codRastreio).then(response =>{
    console.log(response[0].eventos.reverse());
});



// Mais detalhes: https://github.com/FinotiLucas/Correios-Brasil