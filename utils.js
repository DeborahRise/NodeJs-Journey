function getrandom () {
    return(Math.floor(Math.random() * 100) * 1);
}

 export function celciusToF (celcuis) {
    return (celcuis * 9) / 5 + 32;
}
export default getrandom;