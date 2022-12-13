import _ from 'underscore'
/**
 * 
 * @param {Arrary<String>} carta 
 * @returns {Number} Retorna un numero
 */
export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}