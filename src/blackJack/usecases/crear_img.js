
/** 
 * @param {String} carta example:'QD'
 * @returns {HTMLImageElement} retorna una imagen
*/
export const crearImagen = (carta) =>{
    let imgCarta = document.createElement('img');
    imgCarta.src = `cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    return imgCarta
}