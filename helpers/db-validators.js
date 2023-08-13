const { Categoria, Usuario } = require('../models');
const Role = require('../models/role');

const isRoleValid = async(role = '') => {
    const existsRole = await Role.findOne({ role });

    if( !existsRole ) {
        throw new Error(`El rol ${ role } no está registrado en la BD.`)
    }
}

const isEmailExists = async( email = '' ) => {
    /* Verificando si el email existe */
    const existEmail = await Usuario.findOne({ email });

    if( existEmail ) {
        throw new Error(`El email ${ email } ya existe en otra cuenta.`)
    }
}

const existsUserById = async( id ) => {
    /* Verificar si el correo existe */
    const existsUser = await Usuario.findById(id);

    if( !existsUser ) {
        throw new Error(`El id ${ id } no existe.`)
    }
}

const existsCategoriaById = async( id ) => {
    /* Verificar si la categoria existe */
    const existsCategoria = await Categoria.findById( id );

    if( !existsCategoria ) {
        throw new Error(`La categoria con el id: ${ id } no existe.`)
    }
}

module.exports = {
    existsCategoriaById,
    existsUserById,
    isEmailExists,
    isRoleValid
}