const frases = ["Amad a la dama", "Allí ves Sevilla", "Sometamos o matemos"];
const sinAcentos = desacentuado(frases)
const textoMinu = textoMin(frases)

function desacentuado() {
  frases.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

function textoMin() {
  frases.toLowerCase().split("").join("").replaceAll(/[.,:;()_?¿!¡-\s]/g)
}

let fraseMinSinAcentos = fraseMin => { frases.sinAcentos.textoMinu };

console.log(fraseMinSinAcentos);
