const mongoose = require('mongoose');
const Cliente = require('../Controller/Cliente');

class ClienteController extends IClienteController{
  constructor(){
    super();

  // cria cliente
  async store(req, res)
     {
        const cliente =  await Cliente.create(req.body);

        return res.json(cliente);
     },
   
  //busca cliente
  async index(req,res)
    {
        let cliente = await Cliente.find(
          { nome : req.query.nome},
          { CPF : req.query.CPF}  );
        return res.json(cliente);
    }

  // altera cliente
  // devesse passar três dados: o nome e o cpf via param e o json via body
   async update(req,res){
        let cliente = await User.findByIdAndUpdate(req.params.nome,req.params.cpf,req.body,{new:true}); 
        return res.json(cliente);
    }
 
};
