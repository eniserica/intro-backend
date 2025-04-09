// import express from 'express';

// const app = express();

// app.get('/locations',(request, response)=>{
//    const {page, page_size} = request.query
//    console.log(page, page_size)
//    response.status(200).json(['location 1', 'location 2'])
   
// })

// // app.post('/locations',(request, response)=>{
// //     response.status(201).json(['location1', 'location2', 'location3'])
// //     console.log('Cria uma nova localização') 
   
// // })

// // app.put('/locations',(request, response)=>{
// //     response.status(200).json(['location1', 'location2', 'location50'])
// //     console.log('Atualiza uma nova localização') 
// // })


// // app.delete('/locations',(request, response)=>{
// //     response.status(200).json(['location1', 'location2'])
// //     console.log('Deleta uma localização')
   
// // }) 

// app.listen(3333,()=>{
//     console.log('Servidor iniciado em http://localhost:3333')
// })


import express from "express"

const app = express()

app.use((request, response)=>{
    response.status(200).json({"oi":"OI"})
})

app.listen(3333,()=>{
    console.log('oi')
})