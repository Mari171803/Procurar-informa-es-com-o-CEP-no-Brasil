document.addEventListener('DOMContentLoaded', ()=>{

    const url = 'https://cep.awesomeapi.com.br/json/'
    const form = document.querySelector('.form')
    const infos = document.querySelector('.informacoes')
    const mensagem = document.querySelector('.mensagem')

    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const cep = document.querySelector('.cep').value
        const buscarCep = async () =>{
            infos.innerHTML = " "

            const getData = await fetch(url+cep)
            const response = await getData.json()
            

            const container = document.createElement('p')
            const ibge = document.createElement('p')
            const ddd = document.createElement('p')

            container.innerHTML = `${response.address_type}, ${response.address_name}, ${response.district}, ${response.city} - ${response.state}`
            ibge.innerHTML = `Código IBGE do município: ${response.city_ibge}`
            ddd.innerHTML = `DDD: ${response.ddd}`

            infos.appendChild(container)
            infos.appendChild(ibge)
            infos.appendChild(ddd)
        }
        buscarCep().then(()=>{
            mensagem.innerHTML = "Busca realizada com sucesso"
            mensagem.classList.add('sucesso')
        }).catch((error)=>{
            mensagem.innerHTML = "Algo deu errado, tente novamente"
            mensagem.classList.add('erro')
        })
    })
})

