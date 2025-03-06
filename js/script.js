const bici = [
    {
        nome : "bianchi",
        peso : 10,
    },

    {
        nome : "mountain-bike",
        peso : 26,
    },
    
    {
        nome : "canyon",
        peso : 14,
    },

    {
        nome : "granville",
        peso : 8,
    },
]

let biciLeggera = bici[0].peso;
let biciPiuLeggera = bici[0].nome;

bici.forEach(function(curBici, index) {

    if (curBici.peso < biciLeggera) {

        biciPiuLeggera = curBici.nome;
        biciLeggera = curBici.peso; 

    }
    
});

const message = `${biciPiuLeggera} è la bici più leggera` 

document.getElementById("message").innerText = message;