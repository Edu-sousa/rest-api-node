const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "metodo Get"
    });
});



router.post('/', (req, res, next) => {
    /*  const filme = {
        nome: req.body.nome,
        ano: req.body.ano,
        descricao: req.body.descricao
    }; */

    mysql.getConnection((error, conn) => {
        console.error(error)
        conn.query(
            'INSERT INTO filmes (nome, ano, descricao) VALUES ( , , )' [req.body.nome, req.body.ano, req.body.descricao],
            (error, resultado, field) => {
                conn.release();
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                res.status(201).send({
                    mensagem: "filme postado",
                    id_filme: resultado.insertId

                });
            })
    })
});

router.get('/:id_filme', (req, res, next) => {
    const id = req.params.id_filme

    res.status(200).send({
        mensagem: "Usando rota Get para um filme especifico"
    })
})


module.exports = router;