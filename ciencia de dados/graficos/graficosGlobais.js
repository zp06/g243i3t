const url = "https://"

async function visualizarInformaçcoesGlobais () {
   const res = await fetch(url);
   const dados = res.json()
   console.log(dados);
}

visualizarInformaçcoesGlobais();