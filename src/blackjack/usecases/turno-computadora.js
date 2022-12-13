import { crearCartaHtml, pedirCarta, valorCarta } from "./";
// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos punto minimos que la computadora necesita para ganas 
 * @param {HTMLElement} puntosHTML elemnto html para mostrar puntos
 * @param {HTMLElement} divCartasComputadora elemnto html para mostrar cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if (!puntosMinimos) throw new Error('puntosMinimos son necesarios');
    if (!puntosHTML) throw new Error('Argumento puntosHTML necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta=crearCartaHtml(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}