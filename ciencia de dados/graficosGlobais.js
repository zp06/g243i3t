const url = 'https://dudamaina.github.io/dados//api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
}

vizualizarInformacoesGlobais()
