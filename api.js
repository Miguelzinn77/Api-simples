
function lognumero() {
  const inputCep = document.getElementById("cep");
  let cep = inputCep.value

  if (cep.length == 8){
    
    let url = `https://viacep.com.br/ws/${cep}/json/`
  
    fetch (url)
    .then((resp) => {
        return resp.json()
    })
    .then(dados => {
        let inputRua = document.getElementById('cep')
        console.log(dados)
        inputRua.value = dados.cep
        inputRua.setAttribute('disabled', 'disabled')
        
         let inputLogradouro = document.getElementById('rua')
        console.log(dados)
        inputRua.value = dados.rua
        inputRua.setAttribute('disable', 'disable') 

        let inputEstado = document.getElementById('estado')
        console.log(dados)
        inputRua.value = dados.estado
        inputRua.setAttribute('disable', 'disable')

        let inputRegiao = document.getElementById('regiao')
        console.log(dados)
        inputRua.value = dados.regiao
        inputRua.setAttribute('disable', 'disable')
    })
      .catch(()=>{
        console.log('erro')
      })    
}}
