ejecutar = () => {
    let frutas = ["Banana", "Sandia", "Papaya"];
    frutas.push("Pomelo");

    return frutas;
}

testEjecutar = () => {
    let frutaRecuperada = ejecutar();
    let primeraFruta = frutaRecuperada[0];
    let segundaFruta = frutaRecuperada[1];

    console.log("1 >>>>> " + primeraFruta);
    console.log("2 >>>>> " + segundaFruta);
}

testEjecutarDes = () => {
    let [primeraFruta, segundaFruta, terceraFruta] = ejecutar();

    console.log("1 >>>>> " + primeraFruta);
    console.log("2 >>>>> " + segundaFruta);
    console.log("3 >>>>> " + terceraFruta);
}