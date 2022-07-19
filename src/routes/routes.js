const express = require('express');
const PessoaInsert = require('../controller/PessoaController/PessoaInsert');
const PessoaSearchAll = require('../controller/PessoaController/PessoaSearchAll');
const PessoaSearchByPk = require('../controller/PessoaController/PessoaSearchByPk');
const PessoaUpdate = require ('../controller/PessoaController/PessoaUpdate');
const PessoaDelete = require('../controller/PessoaController/PessoaDelete');
const EnderecoInsert = require ('../controller/EnderecoController/EnderecoInsert')
const EnderecoSearchAll = require ('../controller/EnderecoController/EnderecoSearchAll')
const EnderecoSearchByPk = require ('../controller/EnderecoController/EnderecoSearchByPk')
const EnderecoSearchByPessoaId = require ('../controller/EnderecoController/EnderecoSearchByPessoaId')
const EnderecoUpdate = require ('../controller/EnderecoController/EnderecoUpdate')
const EnderecoDelete = require ('../controller/EnderecoController/EnderecoDelete')
const router = express.Router();

router.post('/endereco', EnderecoInsert.Insert);
router.get('/endereco', EnderecoSearchAll.SearchAll);
router.get('/endereco/:id', EnderecoSearchByPk.SearchOne);
router.get('/endereco/pessoaId/:pessoaId', EnderecoSearchByPessoaId.SearchByPessoaId);
router.put('/endereco/:id', EnderecoUpdate.Update);
router.delete('/endereco/:id', EnderecoDelete.Delete);
router.post('/pessoa', PessoaInsert.Insert);
router.get('/pessoa', PessoaSearchAll.SearchAll);
router.get('/pessoa/:id', PessoaSearchByPk.SearchOne);
router.put('/pessoa/:id', PessoaUpdate.Update);
router.delete('/pessoa/:id', PessoaDelete.Delete);

module.exports = router;