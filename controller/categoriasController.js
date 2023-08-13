const { response } = require('express');
const { Categoria } = require('../models');

const categoriasAll = async(req, res = response) => {
    res.status(200).json({
        msg: 'Categorias All'
    });
}

const categoriaById = async(req, res = response) => {
    res.status(200).json({
        msg: 'Categorias By Id'
    });
}

const categoriaCreate = async(req, res = response) => {
    const name = req.body.name.toUpperCase();
    
    try {
        const categoriaDB = await Categoria.findOne({ name });

        if( categoriaDB ) {
            return res.status(400).json({
                msg: `La categoria ${ categoriaDB.name } ya existe.`
            })
        }

        /* Se genera la data a guardar */
        const dataCategoria = {
            name,
            usuario: req.usuario.id
        }

        const categoria = new Categoria( dataCategoria );
        /* Se guarda en DB */
        await categoria.save();

        res.status(201).json({
            categoria
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            msg: 'Hable con el administrador.'
        });
    }
}

const categoriaUpdate = async(req, res = response) => {
    res.status(200).json({
        msg: 'Categoria Update'
    });
}

const categoriaDelete = async(req, res = response) => {
    res.status(200).json({
        msg: 'Categoria Delete'
    });
}

module.exports = {
    categoriasAll,
    categoriaById,
    categoriaCreate,
    categoriaUpdate,
    categoriaDelete
}