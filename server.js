//importa o arquivo externo que foi instalado 
import express from 'express';

//coloca o arquivo dentro de uma variável
const app = express();
app.use(express.json()) //Obrigatorio para aceitar JSON()
/** Requisições
 * 1º - Métodos 
 * 1.1 - GET -> busca dados
 * 1.2 - POST -> cria dados 
 * 1.3 - PUT -> atualiza dados 
 * 1.4 - DELETE -> remove dados
 * 1.5 - PATCH -> atualiza UMA informação  
 * 2º - Receber Informações do cliente
 * 2.1 - Query Params -> Filtros
 * 2.1.1 - http://exemplo.com/projetos?nome=Web&author=Erica
 * 2.2 - Route Params -> Identificar um recurso
 * 2.2.1 -  http://exemplo.com/projetos/30
 * 2.3 - Body Params -> {obj JSON}
 * 2.3.1 - {nome: Érica, idade: 17}
 * 3 - Status 
 * 3.1 - 100 -> informativo 
 * 3.2 - 200 -> sucesso
 * 3.3 - 300 -> recurso movido 
 * 3.4 - 400 -> erro do cliente
 * 3.5 - 500 -> erro do servidor
 */

//                 query route / projeto&nome="Érica"
app.get('/projetos',(request, response)=>{
    const {titulo, autor} = request.query
    console.log(titulo,autor)
    // console.log(request.query) //recebendo as informações passadas com query 
   response.status(200).json(['Projeto1', 'Projeto2'])
})

app.post('/projetos',(request, response)=>{
    console.log(request.body) 
    response.status(201).json(['Projeto1', 'Projeto2', 'Projeto3'])
})

app.put('/projetos',(request, response)=>{
    response.status(200).json(['Projeto88', 'Projeto2', 'Projeto3'])
})

//Receber informação por rota Route Params /projetos/15
app.delete('/projetos/:id',(request, response)=>{
    const {id} = request.params
    console.log(id)
    response.status(200).json(['Projeto2', 'Projeto3'])
}) 

app.listen(3333, ()=> {
    console.log('Servidor iniciado em http://localhost:3333')
})

