const { response } = require('express');

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
    res.status(200).json({
        msg: 'Categoria Create'
    });
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