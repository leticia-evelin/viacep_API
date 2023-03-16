'use strict'

export const pesquisarCep = async (cep) => {
    const url = `https://api.postmon.com.br/v1/cep/${cep}`

    const response = await fetch(url)   
    const data = await response.json()


    // "alterar" JSON e usar apenas o que eu quero
   return {
        municipio: data.cidade,
        logradouro: data.logradouro,
        estado: data.uf,
        bairro: data.bairro,
        ...data
   }
    
}