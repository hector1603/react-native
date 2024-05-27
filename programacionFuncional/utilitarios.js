recuperarTexto = (idComponente) => {
    let cmpRecuperado = document.getElementById(idComponente);
    let valorCmp = cmpRecuperado.value;
    return valorCmp;
}

recuperarEntero = (idComponente) => {
    let valor = recuperarTexto(idComponente);
    let valorEntero = parseInt(valor);
    return valorEntero;
}

recuperarFloat = (idComponente) => {
    let valor = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valor);
    return valorFlotante;
}