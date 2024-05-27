sumar = (num1, num2) => {
    return num1 + num2;
}

restar = (num1, num2) => {
    return num1 - num2;
}

ejecutarOperacion = (funcion) => {
    let num1 = recuperarEntero("txtValor1");
    let num2 = recuperarEntero("txtValor2");
    let result = funcion(num1, num2)
    console.log(result);
}

ejecutar = (funcion) => {
    console.log("Aprendiendo programación funcional")
    funcion();
}

imprimir = () => {
    console.log("Hola desde la función imprimir...");
}

testEjecutar = () => {
    ejecutar(imprimir);
    ejecutar(() => {
        console.log("Saludo desde una función anónima 👋🏼");
    });
}