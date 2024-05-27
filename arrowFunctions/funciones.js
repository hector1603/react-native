sumar = () => {
    let num1 = recuperarEntero("txtValor1");
    let num2 = recuperarEntero("txtValor2");
    let resultado = num1 + num2;
    console.log("La suma es: " + resultado);
}

restar = (num1, num2) => {
    return num1 - num2;
}

ejecutarResta = () => {
    let valor1 = recuperarFloat("txtValor1");
    let valor2 = recuperarFloat("txtValor2");
    let result = restar(valor1, valor2);
    console.log("La resta es: " + result);
}