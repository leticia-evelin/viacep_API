'use strict'

 export const pesquisarCep = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(url)   
    const data = await response.json()


    // "alterar" JSON e usar apenas o que eu quero
   return {
    municipio: data.localidade,
    estado: data.uf,
    bairro: data.bairro,
    cidade: data.cidade,
    logradouro: data.logradouro,
    
    //ou
    //...data // ... espalhar JSON
} 
}

