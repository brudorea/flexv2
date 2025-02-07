/**
 * APP PWA - Etanol x Gasolina
 * @author Bruno Henrique
 * @version 2.0
 */

function calcular() {
    //capturar os valores das caixas do input
    let gasolina = document.getElementById('gasolina').value
    let etanol = document.getElementById('etanol').value
    let kmlGasolina = document.getElementById('kmGasolina').value
    let kmlEtanol = document.getElementById('kmEtanol').value
    console.log(gasolina)
    console.log(etanol)
    console.log(kmlGasolina)
    console.log(kmlEtanol)
    //cálculo da vantagem
    if (etanol < (kmlEtanol / kmlGasolina) * gasolina) {
        document.getElementById('status').src = "img/etanol.png"
    } else {
        document.getElementById('status').src = "img/gasolina.png"
    }
}
